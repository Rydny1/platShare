export function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <header>
      <div>
        <h1 className="text-[28px] font-semibold leading-tight tracking-[-0.025em] sm:text-[30px]">{title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </header>
  );
}
