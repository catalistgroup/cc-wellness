export function ValueBar() {
  return (
    <div className="border-y border-sage-mist py-4">
      {/* Desktop: single line with dividers */}
      <p className="hidden sm:block font-inter text-xs uppercase tracking-[0.15em] text-olive-gray text-center">
        outstanding service &nbsp;|&nbsp; exclusive pricing &nbsp;|&nbsp;
        industry expertise
      </p>
      {/* Mobile: stacked */}
      <div className="flex sm:hidden flex-col items-center gap-1">
        <p className="font-inter text-xs uppercase tracking-[0.15em] text-olive-gray">
          outstanding service
        </p>
        <p className="font-inter text-xs uppercase tracking-[0.15em] text-olive-gray">
          exclusive pricing
        </p>
        <p className="font-inter text-xs uppercase tracking-[0.15em] text-olive-gray">
          industry expertise
        </p>
      </div>
    </div>
  );
}
