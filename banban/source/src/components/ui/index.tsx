import * as React from 'react';
import {Slot} from '@radix-ui/react-slot';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import {cva, type VariantProps} from 'class-variance-authority';
import {clsx, type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';
import {X} from 'lucide-react';
export function cn(...inputs:ClassValue[]){return twMerge(clsx(inputs))}
const buttonVariants=cva('inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 disabled:pointer-events-none disabled:opacity-50',{variants:{variant:{default:'bg-[#fdc700] text-black hover:bg-[#ffdf20]',outline:'border border-black/20 bg-transparent hover:bg-black/5',ghost:'hover:bg-black/5'},size:{default:'h-11 px-5 rounded-lg',sm:'h-9 px-4 rounded-lg'}},defaultVariants:{variant:'default',size:'default'}});
export const Button=React.forwardRef<HTMLButtonElement,React.ButtonHTMLAttributes<HTMLButtonElement>&VariantProps<typeof buttonVariants>&{asChild?:boolean}>(({className,variant,size,asChild=false,...props},ref)=>{const Comp=asChild?Slot:'button';return <Comp className={cn(buttonVariants({variant,size,className}))} ref={ref} {...props}/>});
export function Card({className,...props}:React.HTMLAttributes<HTMLDivElement>){return <div className={cn('rounded-2xl border border-[#e4e4e4] bg-white',className)} {...props}/>}
export const Input=React.forwardRef<HTMLInputElement,React.InputHTMLAttributes<HTMLInputElement>>(({className,...props},ref)=><input ref={ref} className={cn('flex h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base outline-none focus:ring-2 focus:ring-[#006045]',className)} {...props}/>);
export const Tabs=TabsPrimitive.Root;
export const TabsList=TabsPrimitive.List;
export const TabsTrigger=TabsPrimitive.Trigger;
export const TabsContent=TabsPrimitive.Content;
export const Dialog=DialogPrimitive.Root;
export const DialogTrigger=DialogPrimitive.Trigger;
export const DialogTitle=DialogPrimitive.Title;
export const DialogDescription=DialogPrimitive.Description;
export function DialogContent({children,className,...props}:React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>){return <DialogPrimitive.Portal><DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/45 data-[state=open]:animate-in"/><DialogPrimitive.Content className={cn('fixed left-1/2 top-1/2 z-50 w-[calc(100%_-_40px)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-8 shadow-xl',className)} {...props}>{children}<DialogPrimitive.Close className="absolute right-5 top-5 rounded-md p-1 hover:bg-slate-100 focus-visible:ring-2" aria-label="关闭"><X size={20}/></DialogPrimitive.Close></DialogPrimitive.Content></DialogPrimitive.Portal>}
export const Sheet=DialogPrimitive.Root;
export const SheetTrigger=DialogPrimitive.Trigger;
export const SheetClose=DialogPrimitive.Close;
export function SheetContent({children}:React.PropsWithChildren){return <DialogPrimitive.Portal><DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/40"/><DialogPrimitive.Content className="fixed right-0 top-0 z-50 h-full w-80 bg-white p-7 shadow-xl">{children}<DialogPrimitive.Close aria-label="关闭菜单" className="absolute right-6 top-7"><X/></DialogPrimitive.Close></DialogPrimitive.Content></DialogPrimitive.Portal>}
