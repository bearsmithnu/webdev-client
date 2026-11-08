

export default function ConfirmDeleteAssignment({
  close,
  deleteAssn,
  title,
}: {
  close: () => void;
  deleteAssn: () => void;
  title: string;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
    >
      <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
          <h3 className="m-0 text-lg font-semibold">Are you sure you want to delete &quot;{title}&quot;?</h3>
          <button
            type="button"
            onClick={close}
            className="text-2xl leading-none text-neutral-500"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="flex justify-end gap-2 border-t border-neutral-200 px-4 py-3">
          <button
            type="button"
            onClick={close}
            className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              deleteAssn();
              close();
            }}
            className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            Delete assignment
          </button>
        </div>
      </div>
    </div>
  );
}
