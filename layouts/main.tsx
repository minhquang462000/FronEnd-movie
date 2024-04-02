import FooterMain from '@/components/Footer/FooterMain';
import HeaderMobile from '@/components/header/HeaderMobile';
import HeaderSelect from '@/components/header/HeaderSelect';
import { ILayout } from '@/interfaces';
import * as React from 'react';


export default function MainLayout({
    children,
}: Readonly<ILayout>) {
    return (
        <section>
            <HeaderMobile />
            <HeaderSelect />
            {children}
            <FooterMain />
        </section>
    );
}

