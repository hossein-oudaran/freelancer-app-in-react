
function ConfirmDelete({ resourceName, onClose, disabled, onConfirm }) {
  return (
    <div>
      <h2 className="font-bold text-base mb-8">
        آیا از حذف {resourceName} مطمئن هستید ؟
      </h2>
      <div className="flex justify-between items-center gap-x-16">
        <button
          className="btn btn--primary flex-1"
          onClick={onClose}
          disabled={disabled}
        >
          لغو
        </button>
        <button
          className="btn btn--danger py-3 flex-1"
          onClick={onConfirm}
          disabled={disabled}
        >
          تأیید
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
