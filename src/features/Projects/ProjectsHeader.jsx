import { useState } from "react";
import Modal from "../../ui/Modal";
import CreatProjectForm from "./CreatProjectForm";
import { HiOutlinePlus } from "react-icons/hi";

function ProjectsHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="font-black text-secondary-700 text-xl">پروژه های شما</h1>
      <Modal title="پروژه های شما" open={open} onClose={() => setOpen(false)}>
        <CreatProjectForm />
      </Modal>
      <button
        onClick={() => setOpen(true)}
        className="btn btn--primary flex items-center gap-x-2"
      >
        <HiOutlinePlus />
        <span>اضافه کردن پروژه</span>
      </button>
    </div>
  );
}

export default ProjectsHeader;
