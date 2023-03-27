import { connect, useField } from "formik";

const Input = (props) => {
  const [field] = useField(props);
  return (
    <input
      {...field}
      placeholder={props.placeholder}
      type={props.type}
      className="flex-1 border border-gray-200 pl-2"
    />
  );
};

export default connect(Input);
