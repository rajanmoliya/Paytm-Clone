function InputBox({ label, placeholder, onChange }) {
  return (
    <div>
      <div className="font-medium pt-4">{label}</div>
      <input
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className="p-2 border"
      />
    </div>
  );
}

export default InputBox;
