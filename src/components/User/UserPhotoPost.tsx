import { FormEvent, useState, ChangeEvent, useEffect } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Error from "../Helper/Error";
import { PhotoPostStyle } from "./styled";
import useForm from "../../Hooks/useForm";
import { useNavigate } from "react-router-dom";
import usePhoto from "../../Hooks/usePhoto";

interface PreviewImg {
  preview: string;
  raw: File;
}
const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState<PreviewImg>({} as PreviewImg);
  const { data, loading, error, sendNewPhoto } = usePhoto();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData();

    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);
    formData.append("img", img.raw);

    const token = window.localStorage.getItem("token");
    sendNewPhoto(formData, token);
  }

  function handleImgChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (!target.files || target.files.length === 0) return;
    const file = target.files[0];

    setImg({
      preview: URL.createObjectURL(file),
      raw: file,
    });
  }

  return (
    <PhotoPostStyle>
      <div className={`photoPost animeLeft`}>
        <form onSubmit={handleSubmit}>
          <Input label="Nome" type="text" name="nome" {...nome} />
          <Input label="Peso" type="number" name="peso" {...peso} />
          <Input label="Idade" type="number" name="idade" {...idade} />
          <input
            className="file"
            type="file"
            name="img"
            id="img"
            onChange={handleImgChange}
          />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar</Button>
          )}
          <Error error={error} />
        </form>
        <div>
          {img.preview && (
            <div
              className="preview"
              style={{ backgroundImage: `url(${img.preview})` }}
            ></div>
          )}
        </div>
      </div>
    </PhotoPostStyle>
  );
};

export default UserPhotoPost;
