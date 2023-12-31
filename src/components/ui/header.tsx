"use client"

import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";
import { Card } from "./card";
import { Separator } from "./separator";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

export const Header = () => {
    const { data, status } = useSession()

    const handleLoginClick = async () => {
        await signIn()
    }

    const handleLogoutClick = async () => {
        await signOut()
    }

    return (
        <Card className="flex justify-between p-[1.875rem] items-center">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>

                <SheetContent side="left">
                    <SheetHeader className="text-left text-lg font-semibold">
                        Menu
                    </SheetHeader>

                    {status === 'authenticated' && data?.user && (
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 py-4">
                                <Avatar >
                                    <AvatarFallback>
                                        {data.user.name?.[0].toUpperCase()}
                                    </AvatarFallback>

                                    {data.user.image && <AvatarImage src={data.user.image} />}

                                </Avatar>

                                <div className="flex-flex-col">
                                    <p className="font-medium">{data.user?.name}</p>
                                    <p className="text-sm opacity-75">Boas compras!</p>
                                </div>
                            </div>

                            <Separator />
                        </div>
                    )}

                    <div className="mt-4 flex flex-col gap-2">
                        {status === 'unauthenticated' ? (
                            <Button
                                onClick={handleLoginClick}
                                variant='outline'
                                className="w-full justify-start gap-2"
                            >
                                <LogInIcon size={16} />
                                Fazer Login
                            </Button>

                        ) : (
                            <Button
                                onClick={handleLogoutClick}
                                variant='outline'
                                className="w-full justify-start gap-2"
                            >
                                <LogInIcon size={16} />
                                Fazer Logout
                            </Button>)}

                        <SheetClose asChild>
                            <Link href='/'>
                                <Button variant='outline' className="w-full justify-start gap-2" >
                                    <HomeIcon size={16} />
                                    Inicio
                                </Button>
                            </Link>
                        </SheetClose>

                        <Button variant='outline' className="w-full justify-start gap-2" >
                            <PercentIcon size={16} />
                            Ofertas
                        </Button>

                        <SheetClose asChild>
                            <Link href='/catalog'>
                                <Button variant='outline' className="w-full justify-start gap-2" >
                                    <ListOrderedIcon size={16} />
                                    Catálogo
                                </Button>
                            </Link>
                        </SheetClose>

                    </div>
                </SheetContent>
            </Sheet>

            <Link href='/'>
                <h1 className="font-bold text-lg"> <span className="text-primary">FSW</span> Store</h1>
            </Link>
            <Button size='icon' variant='outline'>
                <ShoppingCartIcon />
            </Button>

        </Card>
    );
}
