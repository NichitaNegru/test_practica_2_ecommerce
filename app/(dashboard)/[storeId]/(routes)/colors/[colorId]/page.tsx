import prismadb from "@/lib/prismadb";
import { ColorForm } from "./components/color-form";

const ColorPage = async ({
    params,
}: {
    params: { colorId: string };
}) => {
    // Fetch the color from the database directly
    const color = await prismadb.color.findUnique({
        where: {
            id: params.colorId,  // Assuming colorId is a string (UUID) or number (SERIAL)
        },
    });

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ColorForm initialData={color} />
            </div>
        </div>
    );
};

export default ColorPage;
