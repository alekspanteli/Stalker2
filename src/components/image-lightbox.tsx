"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import * as DialogPrimitive from "@radix-ui/react-dialog";

interface ImageLightboxProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  imageSrc: string | null;
  imageAlt: string | null;
  imageLoaded: boolean;
  onImageLoad: () => void;
  onPrev: () => void;
  onNext: () => void;
  caption: string;
  counter: string;
  dialogTitle: string;
  dialogDescription: string;
}

export function ImageLightbox({
  open,
  onOpenChange,
  imageSrc,
  imageAlt,
  imageLoaded,
  onImageLoad,
  onPrev,
  onNext,
  caption,
  counter,
  dialogTitle,
  dialogDescription,
}: ImageLightboxProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-[1400px] h-auto max-h-[90vh] p-0 border-0 bg-transparent">
        <VisuallyHidden.Root>
          <DialogPrimitive.Title>{dialogTitle}</DialogPrimitive.Title>
          <DialogPrimitive.Description>
            {dialogDescription}
          </DialogPrimitive.Description>
        </VisuallyHidden.Root>
        {imageSrc && imageAlt && (
          <div className="relative">
            <DialogClose className="absolute -top-10 right-0 z-10 text-stalker-cream/70 hover:text-stalker-orange transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </DialogClose>

            <div className="relative w-full aspect-video">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="animate-spin h-8 w-8 text-stalker-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                </div>
              )}
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className={`object-contain transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                sizes="95vw"
                priority
                onLoad={onImageLoad}
              />
            </div>

            <p className="text-stalker-cream/60 text-sm font-[family-name:var(--font-oswald)] tracking-wider text-center mt-3">
              {caption}
              <span className="text-stalker-cream/30 ml-3">{counter}</span>
            </p>

            <button
              onClick={onPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-stalker-dark/60 hover:bg-stalker-orange/80 text-stalker-cream p-2 transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={onNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-stalker-dark/60 hover:bg-stalker-orange/80 text-stalker-cream p-2 transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}