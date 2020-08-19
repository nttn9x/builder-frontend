import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().trim().required("this_field_is_required"),
  email: Yup.string().trim().email("invalid_email").required("this_field_is_required"),
  password: Yup.string().trim().required("this_field_is_required"),
});

export default RegisterSchema;
