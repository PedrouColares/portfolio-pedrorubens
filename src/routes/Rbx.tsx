import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "../components/ui/tooltip"
import { useState, useEffect } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"

export default function Rbx() {
    const [gameData, setGameData] = useState({
        name: 'The Wheel',
        description: 'Loading...',
        playersOnline: 0,
        icon: null,
        cover: null,
        favorites: 0,
        visits: 0
    });

    const [loading, setLoading] = useState(true);

    const universeId = 2475984522;
    const CORS_PROXY = 'https://api.allorigins.win/get?url=';

    async function fetchWithCORS(url: string) {
        const response = await fetch(`${CORS_PROXY}${encodeURIComponent(url)}`);
        const data = await response.json();
        return JSON.parse(data.contents);
    }

    useEffect(() => {
        async function fetchGameData() {
            try {
                let gameInfo = null;
                try {
                    const gameData = await fetchWithCORS(`https://games.roblox.com/v1/games?universeIds=${universeId}`);
                    gameInfo = gameData.data?.[0];
                } catch (e) {
                    console.log('Erro ao buscar info básica:', e);
                }

                let iconUrl = null;
                try {
                    const iconData = await fetchWithCORS(`https://thumbnails.roblox.com/v1/games/icons?universeIds=${universeId}&returnPolicy=PlaceHolder&size=256x256&format=Png&isCircular=false`);
                    iconUrl = iconData.data?.[0]?.imageUrl;
                } catch (e) {
                    console.log('Erro ao buscar ícone:', e);
                }

                let coverUrl = null;
                try {
                    const coverData = await fetchWithCORS(`https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds=${universeId}&countPerUniverse=1&defaults=true&size=768x432&format=Png`);
                    coverUrl = coverData.data?.[0]?.thumbnails?.[0]?.imageUrl;
                } catch (e) {
                    console.log('Erro ao buscar capa:', e);
                }

                let playersOnline = gameInfo?.playing || 0

                setGameData({
                    name: gameInfo?.name || 'The Wheel',
                    description: gameInfo?.description || '',
                    playersOnline: playersOnline,
                    icon: iconUrl,
                    cover: coverUrl,
                    favorites: gameInfo?.favoritedCount || 0,
                    visits: gameInfo?.visits || 0
                });

            } catch (error) {
                setGameData(prev => ({
                    ...prev,
                    description: ''
                }));
            } finally {
                setLoading(false);
            }
        }

        fetchGameData();
    }, []);

    return (
        <>
            <FlickeringGrid maxOpacity={0.05} squareSize={3} className="fixed -z-10" />

            <div className="flex flex-col gap-2 justify-center items-center">
                <div className="p-3 w-full max-w-md rounded-xl shadow-xl shadow-gray-200 flex flex-col gap-3 justify-center items-center bg-white">
                    <img className="shadow-lg border-2 border-gray-300 rounded-full w-24 h-24 mt-2" src="https://tr.rbxcdn.com/30DAY-AvatarHeadshot-847D8DCDA82F920386E6F381B4C92527-Png/150/150/AvatarHeadshot/Webp/noFilter" alt="roblox-character-pedro"/>

                    <div className="flex flex-row gap-6 items-start">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div className="inline-flex flex-row items-center gap-2 text-gray-600 hover:text-black transition-colors cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M18 20a6 6 0 0 0-12 0" /> <circle cx="12" cy="10" r="4" /> <circle cx="12" cy="12" r="10" /></svg>
                                        <span className="text-sm">My Profile</span>
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent side="bottom">
                                    @pedroredfield
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <div className="inline-flex flex-row items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                            </svg>
                            <span className="text-sm">@pedroredfield</span>
                        </div>
                    </div>
                </div>

                <Card className="w-full xl:max-w-lg max-w-sm shadow-lg">
                    <CardHeader className="pb-4">
                        <div className="flex items-center gap-4">
                            {gameData.icon ? (
                                <img
                                    src={gameData.icon}
                                    alt={`${gameData.name} icon`}
                                    className="w-16 h-16 rounded-lg shadow-md border border-gray-200"
                                />
                            ) : (
                                <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center border border-gray-200">
                                    <span className="text-2xl">🎮</span>
                                </div>
                            )}
                            <div className="flex-1">
                                <CardTitle className="text-lg font-bold text-gray-800">
                                    {gameData.name}
                                </CardTitle>
                                <CardDescription className="text-sm text-gray-600">
                                    {loading ? (
                                        <span className="animate-pulse">Loading...</span>
                                    ) : (
                                        <span className="flex items-center gap-1">
                                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                            {gameData.playersOnline} players online
                                        </span>
                                    )}
                                </CardDescription>
                            </div>
                        </div>

                        {gameData.cover && (
                            <div className="mt-4">
                                <img
                                    src={gameData.cover}
                                    alt={`${gameData.name} thumbnail`}
                                    className="w-full h-48 object-cover rounded-lg border border-gray-200"
                                />
                            </div>
                        )}
                    </CardHeader>

                    <CardContent className="pt-0">
                        <p className="text-sm text-gray-700 leading-relaxed mb-4">
                            {gameData.description}
                        </p>

                        {!loading && (
                            <div className="flex justify-between items-center text-xs text-gray-500 bg-gray-50 rounded-lg p-3">
                                <div className="flex items-center gap-1">
                                    <span>⭐</span>
                                    <span>{gameData.favorites.toLocaleString()}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span>👥</span>
                                    <span>{gameData.playersOnline}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span>🎮</span>
                                    <span>{gameData.visits.toLocaleString()}</span>
                                </div>
                            </div>
                        )}
                    </CardContent>

                    <CardFooter className="pt-0">
                        <Button className="w-full bg-green-600 hover:bg-green-700 transition-colors">
                            <a href={`https://www.roblox.com/games/6581117225/UPDATE-A-RO-A`} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center text-white font-semibold">
                                PLAY
                            </a>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}