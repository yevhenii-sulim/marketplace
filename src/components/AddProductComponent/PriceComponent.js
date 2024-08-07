import CheckIcon from '@mui/icons-material/Check';
import { Box } from './AddProductComponent.styled';
import FieldPrice from './FieldPrice';
import FieldCheckbox from './FieldCheckbox';

export default function PriceComponent({
  handleChange,
  setSubmitting,
  values,
  error,
  touched,
}) {
  return (
    <Box className="price_box">
      <FieldPrice
        name="price"
        label="Ціна"
        handleChange={handleChange}
        setSubmitting={setSubmitting}
        className="price"
        require={true}
        error={error}
        touched={touched}
        value={values.price}
      />
      <FieldPrice
        value={values.discount}
        name="discountPrice"
        label="Ціна зі знижкою"
        handleChange={handleChange}
        setSubmitting={setSubmitting}
        className="discountPrice"
        disabled={!values.discount}
      >
        <FieldCheckbox
          name="discount"
          handleChange={handleChange}
          setSubmitting={setSubmitting}
        />
        <div className="is_discount">
          <CheckIcon />
        </div>
      </FieldPrice>
    </Box>
  );
}
