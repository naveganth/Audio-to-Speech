'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

import { Settings, Baseline, Type, Square, SunMoon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Home() {
  const [position, setPosition] = useState('middle');
  const [fontFamily, setFontFamily] = useState('sans');
  const [fontWeight, setFontWeight] = useState('normal');
  const [fontSize, setFontSize] = useState('16px');
  const [transparency, setTransparency] = useState('100');

  const { theme, setTheme } = useTheme();

  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-100 font-sans dark:bg-zinc-950'>
      <main className='container p-4'>
        {/* Main Subtitle Container */}
        <div className='relative flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:bg-zinc-900'>
          {/* Header with Title and Settings */}
          <div className='mb-4 flex items-center justify-between'>
            <h1 className='text-lg font-semibold text-black dark:text-zinc-50'>
              Texto recebido da IA
            </h1>

            {/* TODO: Separar cada item em arquivos diferentes. */}
            {/* Settings DropdownMenu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' size='icon'>
                  <Settings className='h-5 w-5 text-zinc-600 dark:text-zinc-400' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56'>
                <DropdownMenuLabel>Configurações</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {/* --- Seção Posição (com Submenu) --- */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <Baseline className='mr-2 h-4 w-4' />
                    <span>Posição</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuRadioGroup
                      value={position}
                      onValueChange={setPosition}
                    >
                      <DropdownMenuRadioItem value='top'>
                        Acima da tela
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value='middle'>
                        Sobreposto na tela
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value='bottom'>
                        Abaixo da tela
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                {/* --- Seção Texto (com Submenu) --- */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <Type className='mr-2 h-4 w-4' />
                    <span>Texto</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    {/* Submenu Nível 2: Fonte */}
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>Fonte</DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuRadioGroup
                          value={fontFamily}
                          onValueChange={setFontFamily}
                        >
                          <DropdownMenuRadioItem value='sans'>
                            Sans-Serif
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value='serif'>
                            Serif
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value='mono'>
                            Monospace
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                    {/* Submenu Nível 2: Peso */}
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>Peso</DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuRadioGroup
                          value={fontWeight}
                          onValueChange={setFontWeight}
                        >
                          <DropdownMenuRadioItem value='light'>
                            Light
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value='normal'>
                            Normal
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value='bold'>
                            Bold
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                    {/* Submenu Nível 2: Tamanho (substituindo o Input) */}
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>Tamanho</DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuRadioGroup
                          value={fontSize}
                          onValueChange={setFontSize}
                        >
                          <DropdownMenuRadioItem value='14px'>
                            Pequeno
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value='16px'>
                            Médio
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value='20px'>
                            Grande
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                {/* --- Seção Caixa (com Submenu) --- */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <Square className='mr-2 h-4 w-4' />
                    <span>Caixa</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuLabel>Transparência</DropdownMenuLabel>
                    {/* Substituindo o Slider por RadioGroup */}
                    <DropdownMenuRadioGroup
                      value={transparency}
                      onValueChange={setTransparency}
                    >
                      <DropdownMenuRadioItem value='100'>
                        Sólido (100%)
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value='75'>
                        75%
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value='50'>
                        Semissólido (50%)
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value='0'>
                        Transparente (0%)
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSeparator />

                {/* --- 5. Seção Modo Escuro (SUBSTITUÍDA) --- */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <SunMoon className='mr-2 h-4 w-4' />
                    <span>Modo</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuRadioGroup
                      value={theme}
                      onValueChange={setTheme}
                    >
                      <DropdownMenuRadioItem value='light'>
                        Light
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value='dark'>
                        Dark
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value='system'>
                        System
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Subtitle Text Box */}
          <div className='min-h-[200px] w-full rounded-md border bg-zinc-50 p-4 dark:bg-zinc-800'>
            <p className='text-zinc-400 dark:text-zinc-500'>
              As legendas irão aparecer aqui...
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
