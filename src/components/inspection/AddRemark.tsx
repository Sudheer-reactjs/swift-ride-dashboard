import { useState } from "react";
import { Plus, ChevronDown, MessageCircle, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import FileDropUpload from "../FileDropUpload";

interface AddRemarkProps {
  showNotesOption?: boolean;
  showPhotoOption?: boolean;
}

const AddRemark = ({ showNotesOption = true, showPhotoOption = true }: AddRemarkProps) => {
  const [showNotes, setShowNotes] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [open, setOpen] = useState(false); // Dropdown visibility

  const handleSelect = (type: "notes" | "photo") => {
    if (type === "notes") {
      setShowNotes((prev) => !prev); // Toggle Notes
    } else if (type === "photo") {
      setShowPhoto((prev) => !prev); // Toggle Photo
    }
    setOpen(false); // Close the dropdown after selection
  };

  return (
    <>
      <div className="flex justify-end">
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="border-0 bg-transparent hover:bg-transparent outline-none p-0 h-auto w-auto [&_svg]:size-10"
            >
              <Plus className="!w-4 !h-4 text-white" />
              <span className="text-neutral-50 text-sm">Add Remark</span>
              <ChevronDown className="!w-4 !h-4 text-white" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-4">
            <DropdownMenuGroup>
              {showNotesOption && (
                <DropdownMenuItem className="p-3 cursor-pointer" onClick={() => handleSelect("notes")}>
                  {showNotes ? "Remove Comment" : "Add Comment"}
                  <MessageCircle className="!w-4 !h-4 text-white ml-2" />
                </DropdownMenuItem>
              )}
              {showPhotoOption && (
                <DropdownMenuItem className="p-3 cursor-pointer" onClick={() => handleSelect("photo")}>
                  {showPhoto ? "Remove Photo" : "Add Photo"}
                  <ImageIcon className="!w-4 !h-4 text-white ml-2" />
                </DropdownMenuItem>
              )}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {showNotes && (
        <div className="col-span-12 space-y-1 pt-4">
          <Label className="text-sm font-medium text-gray-100">Comment</Label>
          <Textarea placeholder="" className="bg-black text-white border-zinc-800 h-[90px]" />
        </div>
      )}

      {showPhoto && (
        <div className="col-span-12 space-y-1 pt-4">
          <Label className="text-sm font-medium text-gray-100">Photo</Label>
          <FileDropUpload id="drop-2" />
        </div>
      )}
    </>
  );
};

export default AddRemark;
