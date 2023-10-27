import prismadb from "@/lib/prismadb"

import BillboardForm from "@/components/BillboardForm";

const NewBillboard = async ({params}: {params: {billboardId: string}}) => {
  const billboard = prismadb.billboard.findUnique({
    where: {
      id: params.billboardId
    }
  });

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm  />
      </div>
    </div>
  )
}

export default NewBillboard