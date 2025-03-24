import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

interface InspectionPopupProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const InspectionPopup: React.FC<InspectionPopupProps> = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-[#171717] text-white rounded-lg shadow-none border-none max-w-2xl w-[96%] p-0 gap-0">
        <DialogHeader className="p-4 flex justify-between items-center gap-2 flex-row border-b-[1px] border-neutral-800">
          <DialogTitle className="text-neutral-50 text-lg font-semibold">
            Select Inspection Form
          </DialogTitle>
          <Button
            onClick={() => setOpen(false)}
            className="bg-transparent hover:bg-transparent text-neutral-400 p-0 !mt-0 w-6 h-6 !border-0"
          >
            <X className="!w-6 !h-6" />
          </Button>
          <DialogDescription className="hidden">Submission</DialogDescription>
        </DialogHeader>

        <div className=" py-6 px-5 space-y-6">
          <label className="text-neutral-50 text-sm font-medium">All</label>
          <div className="w-full spark-stack-item">
            <div className="overflow-hidden rounded w-full scrollbar-hide">
              <div className="overflow-y-auto max-h-80">
                <div className="rounded-xl flex flex-col">
                  <div className="flex flex-col fl-list-item rounded-md border border-zinc-800 p-2">
                    <Link href="/inspection-forms" className="text-emerald-500 text-sm font-normal">
                      Driver Vehicle Inspection Report (Simple)
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className=" p-4 flex !justify-between space-x-3 py-6 pt-28">
          <Button className="px-4 py-3 bg-white/0 rounded-md text-neutral-50 text-sm font-normal h-10 hover:bg-zinc-800">
            Add Inspection Form
          </Button>
          <Button
            variant="ghost"
            onClick={() => setOpen(false)}
            className="py-2 bg-zinc-800 rounded-md text-neutral-50 text-sm font-normal h-10"
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InspectionPopup;
