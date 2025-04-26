export default function Input({ label, type = "text", name, placeholder }) {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-sm text-[#1e6091] font-medium">{label}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#168aad]"
        />
      </div>
    );
  }
  