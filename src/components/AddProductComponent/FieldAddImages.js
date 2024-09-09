import { useRef, useState } from 'react';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import CloseIcon from '@mui/icons-material/Close';
import {
  Field,
  Images,
  addImageSignButton,
  AddImageList,
  AddImageButton,
  styleRemoveImgButton,
} from './AddProductComponent.styled';

export default function FieldAddImages({ values, setFieldValue, name }) {
  const [imageBig, setImageBig] = useState([]);
  const [field, setField] = useState(false);
  const inputRef = useRef(null);

  function onChangeFieldByClickDown(e) {
    if (field) return;
    if (e.button !== 0) return;
    setField(prev => !prev);
  }
  function removeFieldByClick(e) {
    if (!field) return;
    if (e.button !== 0) return;
    const { value } = inputRef.current;
    const valuePease = value.includes('/')
      ? value.split('/')
      : value.split('\\');
    setImageBig([]);
    setFieldValue(
      `file`,
      values.file.filter(
        ({ name }) => name !== valuePease[valuePease.length - 1]
      )
    );
    setField(false);
  }
  function onAddFileByClickUp(e) {
    if (e.button !== 0) return;
    if (e.target.closest("[data-remove='imageField']")) return;
    inputRef.current?.click();
  }

  async function handleFileUpload(event, setFieldValue, value) {
    const file = event.currentTarget.files[0];
    const regex = /heic$/i;
    if (file.type.split('/')[0] === 'image' || regex.test(file.name)) {
      const img = URL.createObjectURL(file);
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);

      reader.onloadend = () => {
        setImageBig(prev => [...prev, img]);
        setFieldValue('file', [...value, file]);
      };
    }
  }

  return (
    <>
      <AddImageList>
        <AddImageButton
          $fullUpFul={field}
          type="button"
          onMouseDown={onChangeFieldByClickDown}
          onMouseUp={onAddFileByClickUp}
        >
          <AddSharpIcon sx={addImageSignButton} />
          {field && (
            <Field name={name}>
              {() => (
                <>
                  <input
                    className="input-file"
                    type="file"
                    accept="image/*"
                    required={true}
                    ref={inputRef}
                    onChange={event => {
                      handleFileUpload(event, setFieldValue, values.file);
                      event.target.disabled = true;
                    }}
                  />
                  <Images>
                    {imageBig.length !== 0 &&
                      imageBig.map(item => {
                        return <img src={item} key={item} alt="img" />;
                      })}
                  </Images>
                  <CloseIcon
                    sx={styleRemoveImgButton}
                    onMouseUp={removeFieldByClick}
                    data-remove="imageField"
                  />
                </>
              )}
            </Field>
          )}
        </AddImageButton>
      </AddImageList>
    </>
  );
}
