import { Category } from "@prisma/client";
import Image from 'next/image';
import Link from 'next/link';

interface CategoryItemPros {
    category: Category
}

const CategoryItem = ({ category }: CategoryItemPros) => {
    return (
        <Link href={`/category/${category.slug}`}>
            <div className="flex flex-col">
                <div
                    className="w-full h-[150px] flex items-center justify-center rounded-tl-lg rounded-tr-lg bg-category-item-gradient"
                >
                    <Image
                        src={category.imageUrl}
                        alt={category.name}
                        width={0}
                        height={0}
                        className="h-auto max-h-[70%] w-auto max-w-[80%]"
                        sizes="100vw"
                        style={{
                            objectFit: "contain"
                        }}
                    />
                </div>

                <div className="bg-accent py-3 rounded-br-lg rounded-bl-lg ">
                    <p className="text-sm font-semibold text-center">{category.name}</p>
                </div>
            </div>
        </Link>
    );
}

export default CategoryItem;