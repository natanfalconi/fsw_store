import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { LayoutPanelTop } from "lucide-react";
import CategoryItem from "./components/category-item";

const CatalogPage = async () => {

    const categories = await prismaClient.category.findMany()

    return (
        <div className="p-5 flex flex-col gap-8">
            <Badge
                className="gap-1 w-fit text-base uppercase border-primary px-3 border-2 py-[0.365rem]"
                variant='outline'
            >
                <LayoutPanelTop size={16} />
                Catálogo
            </Badge>

            <div className="grid grid-col-2 gap-8">
                {categories.map((category) => <CategoryItem key={category.id} category={category} />)}
            </div>
        </div>
    );
}

export default CatalogPage