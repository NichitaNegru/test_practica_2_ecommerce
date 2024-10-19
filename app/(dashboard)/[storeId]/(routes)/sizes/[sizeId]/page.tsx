import prismadb from "@/lib/prismadb";
import { SizeForm } from "./components/size-form";

const SizePage = async ({
    params,
}: {
    params: { sizeId: string };
}) => {
    // Fetch size directly without ObjectId validation
    const size = await prismadb.size.findUnique({
        where: {
            id: params.sizeId,  // Assuming sizeId is a string (UUID) or number
        },
    });

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <SizeForm initialData={size} />
            </div>
        </div>
    );
};

export default SizePage;
