import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";

interface Props {
  homeData: any;
  onUpdate: any;
}

export const DialogComp = ({ homeData, onUpdate }: Props) => {
  const [modal, setModal] = useState(false);

  const [mainheading, setMainheading] = useState({
    id: homeData?.heading?.id || "",
    text: homeData?.heading?.text || "",
  });

  const [subheading, setSubheading] = useState({
    id: homeData?.sub_heading?.id || "",
    text: homeData?.sub_heading?.text || "",
  });

  const [servicevalues1, setServicevalues1] = useState({
    id: homeData?.service_values?.one?.id || "",
    text: homeData?.service_values?.one?.text || "",
  });

  const [servicevalues2, setServicevalues2] = useState({
    id: homeData?.service_values?.two?.id || "",
    text: homeData?.service_values?.two?.text || "",
  });

  const [servicevalues3, setServicevalues3] = useState({
    id: homeData?.service_values?.three?.id || "",
    text: homeData?.service_values?.three?.text || "",
  });

  const [buttons1, setButtons1] = useState({
    id: homeData?.buttons?.one?.id || "",
    text: homeData?.buttons?.one?.text || "",
  });

  const [buttons2, setButtons2] = useState({
    id: homeData?.buttons?.two?.id || "",
    text: homeData?.buttons?.two?.text || "",
  });

  const [topBar, setTopBar] = useState({
    id: homeData?.formData?.topBar?.id || "",
    text: homeData?.formData?.topBar?.text || "",
  });

  const [formheading, setFormheading] = useState({
    id: homeData?.formData?.heading?.id || "",
    text: homeData?.formData?.heading?.text || "",
  });

  const [formtabs1, setFormtabs1] = useState({
    id: homeData?.formData?.tabs?.one?.id || "",
    text: homeData?.formData?.tabs?.one?.text || "",
  });

  const [formtabs2, setFormtabs2] = useState({
    id: homeData?.formData?.tabs?.two?.id || "",
    text: homeData?.formData?.tabs?.two?.text || "",
  });

  const [formtabs3, setFormtabs3] = useState({
    id: homeData?.formData?.tabs?.three?.id || "",
    text: homeData?.formData?.tabs?.three?.text || "",
  });

  const [formButton, setFormButton] = useState({
    id: homeData?.formData?.formButton?.id || "",
    text: homeData?.formData?.formButton?.text || "",
  });

  //   const handleSaveChanges = async () => {

  const handleSaveChanges = async () => {
    const updatedData = {
      heading: { id: mainheading.id, text: mainheading.text },
      sub_heading: { id: subheading.id, text: subheading.text },
      service_values: {
        one: { id: servicevalues1.id, text: servicevalues1.text },
        two: { id: servicevalues2.id, text: servicevalues2.text },
        three: { id: servicevalues3.id, text: servicevalues3.text },
      },  
      buttons:  {
        one: { id: buttons1.id, text: buttons1.text },
        two: { id: buttons2.id, text: buttons2.text },
      },
      formData: {
        topBar: { id: topBar.id, text: topBar.text },
        heading: { id: formheading.id, text: formheading.text },
        tabs: {
          one: { id: formtabs1.id, text: formtabs1.text },
          two: { id: formtabs2.id, text: formtabs2.text },
          three: { id: formtabs3.id, text: formtabs3.text },
        },
        formButton: { id: formButton.id, text: formButton.text },
      },
    };
    try {
      const response = await axios.put<any>(
        "/api/update-homeData",
        updatedData
      );
      if(response.status === 200) {
        setModal(false)
        onUpdate()
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Dialog open={modal} onOpenChange={(open) => setModal(open)}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setModal(true)}>Edit Content</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] h-96 overflow-scroll">
        <DialogHeader>
          <DialogTitle>Edit Content</DialogTitle>
          <DialogDescription>
            Make changes to your content here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="mainheading" className="text-right">
              Main Heading
            </Label>
            <Input
              id="mainheading"
              defaultValue={homeData?.heading?.text}
              className="col-span-3"
              onChange={(e: any) =>
                setMainheading({
                  id: homeData?.heading?.id,
                  text: e.target.value,
                })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="subheading" className="text-right">
              Subheading
            </Label>
            <Input
              id="subheading"
              defaultValue={homeData?.sub_heading?.text}
              className="col-span-3"
              onChange={(e: any) =>
                setSubheading({
                  id: homeData?.sub_heading?.id,
                  text: e.target.value,
                })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="servicevalues1" className="text-right">
              Service Value 1
            </Label>
            <Input
              id="servicevalues1"
              defaultValue={homeData?.service_values?.one?.text}
              className="col-span-3"
              onChange={(e: any) =>
                setServicevalues1({
                  id: homeData?.service_values?.one?.id,
                  text: e.target.value,
                })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="servicevalues2" className="text-right">
              Service Value 2
            </Label>
            <Input
              id="servicevalues2"
              defaultValue={homeData?.service_values?.two?.text}
              className="col-span-3"
              onChange={(e: any) =>
                setServicevalues2({
                  id: homeData?.service_values?.two?.id,
                  text: e.target.value,
                })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="servicevalues3" className="text-right">
              Service Value 3
            </Label>
            <Input
              id="servicevalues3"
              defaultValue={homeData?.service_values?.three?.text}
              className="col-span-3"
              onChange={(e: any) =>
                setServicevalues3({
                  id: homeData?.service_values?.three?.id,
                  text: e.target.value,
                })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="button1" className="text-right">
              Button 1
            </Label>
            <Input
              id="button1"
              defaultValue={homeData?.buttons?.one?.text}
              className="col-span-3"
              onChange={(e: any) =>
                setButtons1({
                  id: homeData?.buttons?.one?.id,
                  text: e.target.value,
                })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="button2" className="text-right">
              Button 2
            </Label>
            <Input
              id="button2"
              defaultValue={homeData?.buttons?.two?.text}
              className="col-span-3"
              onChange={(e: any) =>
                setButtons2({
                  id: homeData?.buttons?.two?.id,
                  text: e.target.value,
                })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="topBar" className="text-right">
              Top Bar
            </Label>
            <Input
              id="topBar"
              defaultValue={homeData?.formData?.topBar?.text}
              className="col-span-3"
              onChange={(e: any) =>
                setTopBar({
                  id: homeData?.formData?.topBar?.id,
                  text: e.target.value,
                })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="formheading" className="text-right">
              Form Heading
            </Label>
            <Input
              id="formheading"
              defaultValue={homeData?.formData?.heading?.text}
              className="col-span-3"
              onChange={(e: any) =>
                setFormheading({
                  id: homeData?.formData?.heading?.id,
                  text: e.target.value,
                })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="formtabs1" className="text-right">
              Form Tab 1
            </Label>
            <Input
              id="formtabs1"
              defaultValue={homeData?.formData?.tabs?.one?.text}
              className="col-span-3"
              onChange={(e: any) =>
                setFormtabs1({
                  id: homeData?.formData?.tabs?.one?.id,
                  text: e.target.value,
                })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="formtabs2" className="text-right">
              Form Tab 2
            </Label>
            <Input
              id="formtabs2"
              defaultValue={homeData?.formData?.tabs?.two?.text}
              className="col-span-3"
              onChange={(e: any) =>
                setFormtabs2({
                  id: homeData?.formData?.tabs?.two?.id,
                  text: e.target.value,
                })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="formtabs3" className="text-right">
              Form Tab 3
            </Label>
            <Input
              id="formtabs3"
              defaultValue={homeData?.formData?.tabs?.three?.text}
              className="col-span-3"
              onChange={(e: any) =>
                setFormtabs3({
                  id: homeData?.formData?.tabs?.three?.id,
                  text: e.target.value,
                })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="formButton" className="text-right">
              Form Button
            </Label>
            <Input
              id="formButton"
              defaultValue={homeData?.formData?.formButton?.text}
              className="col-span-3"
              onChange={(e: any) =>
                setFormButton({
                  id: homeData?.formData?.formButton?.id,
                  text: e.target.value,
                })
              }
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSaveChanges}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
