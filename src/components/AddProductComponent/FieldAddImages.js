import { useRef, useState } from 'react';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import {
  Field,
  Images,
  addImageSignButton,
  AddImageList,
  AddImageButton,
} from './AddProductComponent.styled';

export default function FieldAddImages({ values, setFieldValue }) {
  const [imageBig, setImageBig] = useState([]);
  const inputRef = useRef(null);

  function onAddFileByClick() {
    inputRef.current?.click();
  }

  async function handleFileUpload(event, setFieldValue, value) {
    const file = event.currentTarget.files[0];
    if (file.type.split('/')[0] !== 'image') return;
    const img = URL.createObjectURL(file);
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    if (value.length === 0) {
      reader.onloadend = () => {
        setImageBig([img]);
        setFieldValue('file', [file]);
      };
    } else {
      reader.onloadend = () => {
        setImageBig(prev => [...prev, img]);
        setFieldValue('file', [...value, file]);
      };
    }
  }

  // const handleDeleteIconClick = () => {
  //   setImageBig([]);
  //   setFieldValue('image', null);
  //   const input = inputRef.current;
  //   if (input) input.value = '';
  // };

  return (
    <>
      <AddImageList>
        <AddImageButton type="button" onClick={onAddFileByClick}>
          <Field name="file">
            {() => (
              <>
                <AddSharpIcon sx={addImageSignButton} />
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
              </>
            )}
          </Field>
        </AddImageButton>
      </AddImageList>
    </>
  );
}
