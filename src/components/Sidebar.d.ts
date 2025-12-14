import React from 'react';
export type GameInfo = {
    id: string;
    name: string;
};
interface SidebarProps {
    games: GameInfo[];
    selected: string;
    onSelect: (game: string) => void;
}
export declare const Sidebar: React.FC<SidebarProps>;
export {};
