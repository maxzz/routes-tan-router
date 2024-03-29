import { HTMLAttributes } from 'react';
import { Link } from "@tanstack/react-router";
import { classNames } from '@/utils/classnames';
import { IconRoutes } from '@/ui/icons';

const linkClasses = (active: boolean) => {
    return {
        className: classNames(
            "px-3 py-2 pb-3 tracking-wide hover:text-sky-100 hover:bg-sky-700 transition-colors duration-200 ease-in-out",
            active ? "text-sky-50" : "text-sky-600"
        )
    };
};

const linkProps = {
    inactiveProps: linkClasses(false),
    activeProps: linkClasses(true),
}

export function Header({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("px-4 font-semibold text-sky-500 bg-sky-900 border-sky-600 border-b shadow flex items-center justify-between", className)} {...rest}>
            <Link to="/" className="tracking-wide text-sky-400 flex items-center">
                <IconRoutes className="mr-1 w-6 h-6 fill-current stroke-green-700 stroke-[.4]" />
                <div className="[-webkit-text-stroke:0.4px_#15803d]">Home</div>
            </Link>

            <div className="flex items-center">
                <Link to="/about" {...linkProps}>
                    About
                </Link>
                <Link to="/books" {...linkProps}>
                    Books
                </Link>
                <Link to="/contact" {...linkProps}>
                    Contacts
                </Link>
            </div>
        </div >
    );
}
