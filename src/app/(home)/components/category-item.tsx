import { CATEGORY_ICON } from "@/app/contants/category-icon";
import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategoryItemProps {
    category: Category
}

const CategoyItem = ({ category }: CategoryItemProps) => {

    return (
        <Link href={`category/${category.slug}`}>
            <Badge variant='outline' className="py-3 flex items-center justify-center gap-2 rounded-lg">
                {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
                <span className="font-bold text-xs">{category.name}</span>
            </Badge>
        </Link>
    );
}

export default CategoyItem;