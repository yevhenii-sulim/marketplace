import CheckIcon from '@mui/icons-material/Check';
import { Box } from './AddProductComponent.styled';
import FieldPrice from './FieldPrice';
import FieldCheckbox from './FieldCheckbox';

export default function PriceComponent({
  handleChange,
  setSubmitting,
  values,
}) {
  return (
    <Box className="price_box">
      <FieldPrice
        name="price"
        label="Ціна"
        handleChange={handleChange}
        setSubmitting={setSubmitting}
        className="price"
        required={true}
      />
      <FieldPrice
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
