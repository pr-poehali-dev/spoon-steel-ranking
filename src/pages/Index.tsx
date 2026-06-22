import { useState, useMemo } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

type Material = 'Сталь 45' | 'Ст3' | 'Ст20' | 'У8А';
type Type = 'Шпоночная сталь' | 'Калиброванный квадрат' | 'Проволока' | 'Лента';

interface Product {
  id: number;
  name: string;
  type: Type;
  material: Material;
  gost: string;
  size: string;
  price: string;
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'Шпоночная сталь 8×7', type: 'Шпоночная сталь', material: 'Сталь 45', gost: 'ГОСТ 8787-68', size: '8×7 мм', price: '92 ₽/м' },
  { id: 2, name: 'Шпоночная сталь 10×8', type: 'Шпоночная сталь', material: 'Сталь 45', gost: 'ГОСТ 8787-68', size: '10×8 мм', price: '118 ₽/м' },
  { id: 3, name: 'Шпоночная сталь 12×8', type: 'Шпоночная сталь', material: 'Ст3', gost: 'ГОСТ 8787-68', size: '12×8 мм', price: '134 ₽/м' },
  { id: 4, name: 'Шпоночная сталь 16×10', type: 'Шпоночная сталь', material: 'Сталь 45', gost: 'ГОСТ 8787-68', size: '16×10 мм', price: '176 ₽/м' },
  { id: 5, name: 'Калиброванный квадрат 10', type: 'Калиброванный квадрат', material: 'Ст20', gost: 'ГОСТ 8559-75', size: '10×10 мм', price: '105 ₽/м' },
  { id: 6, name: 'Калиброванный квадрат 14', type: 'Калиброванный квадрат', material: 'Сталь 45', gost: 'ГОСТ 8559-75', size: '14×14 мм', price: '162 ₽/м' },
  { id: 7, name: 'Калиброванный квадрат 20', type: 'Калиброванный квадрат', material: 'Ст3', gost: 'ГОСТ 8559-75', size: '20×20 мм', price: '248 ₽/м' },
  { id: 8, name: 'Проволока пружинная 2.5', type: 'Проволока', material: 'У8А', gost: 'ГОСТ 9389-75', size: 'Ø 2.5 мм', price: '78 ₽/кг' },
  { id: 9, name: 'Проволока стальная 4.0', type: 'Проволока', material: 'Ст3', gost: 'ГОСТ 3282-74', size: 'Ø 4.0 мм', price: '64 ₽/кг' },
  { id: 10, name: 'Лента стальная 0.5×20', type: 'Лента', material: 'Ст20', gost: 'ГОСТ 503-81', size: '0.5×20 мм', price: '96 ₽/кг' },
  { id: 11, name: 'Лента холоднокатаная 1.0×30', type: 'Лента', material: 'Сталь 45', gost: 'ГОСТ 2284-79', size: '1.0×30 мм', price: '112 ₽/кг' },
  { id: 12, name: 'Шпоночная сталь 20×12', type: 'Шпоночная сталь', material: 'Ст20', gost: 'ГОСТ 8787-68', size: '20×12 мм', price: '214 ₽/м' },
];

const TYPES: Type[] = ['Шпоночная сталь', 'Калиброванный квадрат', 'Проволока', 'Лента'];
const MATERIALS: Material[] = ['Сталь 45', 'Ст3', 'Ст20', 'У8А'];

const TYPE_ICONS: Record<Type, string> = {
  'Шпоночная сталь': 'KeySquare',
  'Калиброванный квадрат': 'Square',
  'Проволока': 'Spline',
  'Лента': 'Minus',
};

const Index = () => {
  const [activeType, setActiveType] = useState<Type | 'all'>('all');
  const [activeMaterial, setActiveMaterial] = useState<Material | 'all'>('all');

  const filtered = useMemo(
    () =>
      PRODUCTS.filter(
        (p) =>
          (activeType === 'all' || p.type === activeType) &&
          (activeMaterial === 'all' || p.material === activeMaterial)
      ),
    [activeType, activeMaterial]
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary glow-orange">
              <Icon name="Hexagon" size={22} className="text-primary-foreground" />
            </div>
            <div className="leading-tight">
              <span className="block font-display text-xl font-700 tracking-wide">ПРОВОЛОКА-ЛЕНТА</span>
              <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">металлопрокат · с 2008 года</span>
            </div>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#catalog" className="text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground">Каталог</a>
            <a href="#about" className="text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground">О стали</a>
            <a href="#contacts" className="text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground">Контакты</a>
          </nav>
          <Button className="font-display uppercase tracking-wider">
            <Icon name="Phone" size={16} className="mr-2" /> Заявка
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="metal-grain relative overflow-hidden border-b border-border">
        <div className="diag-stripes pointer-events-none absolute inset-0" />
        <div className="container relative mx-auto py-24 md:py-32">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm uppercase tracking-wider text-primary">
              <Icon name="BadgeCheck" size={16} /> Соответствие ГОСТ · Сертификаты
            </div>
            <h1 className="font-display text-5xl font-700 uppercase leading-[1.05] md:text-7xl">
              Шпоночная <span className="text-primary">сталь</span><br />и металлопрокат
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Производство и продажа шпоночной стали, калиброванного квадрата, проволоки и ленты.
              Сталь 45, Ст3, Ст20 по ГОСТ. Размеры от 3 до 50 мм. Доставка по всей России.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="font-display uppercase tracking-wider" asChild>
                <a href="#catalog"><Icon name="LayoutGrid" size={18} className="mr-2" /> Открыть каталог</a>
              </Button>
              <Button size="lg" variant="outline" className="font-display uppercase tracking-wider border-border">
                <Icon name="FileText" size={18} className="mr-2" /> Прайс-лист
              </Button>
            </div>
            <div className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              {[
                { v: '500+', l: 'позиций на складе' },
                { v: '16 лет', l: 'на рынке металла' },
                { v: '48 ч', l: 'отгрузка по РФ' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-700 text-primary">{s.v}</div>
                  <div className="text-sm text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="container mx-auto py-20">
        <div className="mb-10 flex flex-col gap-2">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Продукция</span>
          <h2 className="font-display text-4xl font-700 uppercase md:text-5xl">Каталог продукции</h2>
          <p className="max-w-2xl text-muted-foreground">
            Подберите марку стали и тип проката с помощью фильтра. Все позиции в наличии и под заказ.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-5 rounded-sm border border-border bg-card p-6">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground">
              <Icon name="Filter" size={16} /> Тип материала
            </div>
            <div className="flex flex-wrap gap-2">
              <FilterChip active={activeType === 'all'} onClick={() => setActiveType('all')} label="Все типы" />
              {TYPES.map((t) => (
                <FilterChip key={t} active={activeType === t} onClick={() => setActiveType(t)} label={t} icon={TYPE_ICONS[t]} />
              ))}
            </div>
          </div>
          <div className="h-px bg-border" />
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground">
              <Icon name="Layers" size={16} /> Марка стали
            </div>
            <div className="flex flex-wrap gap-2">
              <FilterChip active={activeMaterial === 'all'} onClick={() => setActiveMaterial('all')} label="Все марки" />
              {MATERIALS.map((m) => (
                <FilterChip key={m} active={activeMaterial === m} onClick={() => setActiveMaterial(m)} label={m} />
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 text-sm text-muted-foreground">
          Найдено позиций: <span className="font-600 text-foreground">{filtered.length}</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="group relative overflow-hidden rounded-sm border border-border bg-card p-6 transition-all hover:border-primary/60 hover:glow-orange"
            >
              <div className="diag-stripes pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-secondary text-primary">
                    <Icon name={TYPE_ICONS[p.type]} size={24} />
                  </div>
                  <span className="rounded-sm border border-border px-2 py-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {p.material}
                  </span>
                </div>
                <h3 className="font-display text-xl font-600 uppercase">{p.name}</h3>
                <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Icon name="Tag" size={14} /> {p.type}</div>
                  <div className="flex items-center gap-2"><Icon name="Ruler" size={14} /> Размер: {p.size}</div>
                  <div className="flex items-center gap-2"><Icon name="ShieldCheck" size={14} /> {p.gost}</div>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="font-display text-2xl font-700 text-primary">{p.price}</span>
                  <Button size="sm" variant="outline" className="border-border uppercase tracking-wider">
                    Заказать
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-sm border border-dashed border-border py-16 text-center text-muted-foreground">
            <Icon name="SearchX" size={40} className="mx-auto mb-3" />
            По выбранным фильтрам ничего не найдено
          </div>
        )}
      </section>

      {/* About / SEO content */}
      <section id="about" className="border-y border-border bg-card/40">
        <div className="container mx-auto py-20">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Справочник</span>
          <h2 className="mt-2 font-display text-4xl font-700 uppercase">Что такое шпоночная сталь</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div className="space-y-4 text-muted-foreground">
              <p>
                <span className="text-foreground">Шпоночная сталь</span> — это калиброванный стальной прокат прямоугольного
                или квадратного сечения, который используется для изготовления шпонок. Шпонка — деталь, передающая
                крутящий момент между валом и насаженной на него деталью (шкивом, шестернёй, муфтой).
              </p>
              <p>
                Чаще всего шпоночный материал изготавливают из <span className="text-foreground">Стали 45</span> и
                <span className="text-foreground"> Ст3</span> по ГОСТ 8787-68. Высокая точность сечения позволяет
                использовать материал без дополнительной механической обработки.
              </p>
              <p>
                Наша компания поставляет шпоночную сталь, калиброванный квадрат, проволоку и стальную ленту
                с сертификатами качества и отгрузкой по всей России.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { i: 'Crosshair', t: 'Точность сечения', d: 'Калиброванный прокат с допуском по ГОСТ — без доработки.' },
                { i: 'Award', t: 'Сертификаты качества', d: 'Каждая партия сопровождается паспортом и сертификатом.' },
                { i: 'Truck', t: 'Доставка по РФ', d: 'Отгрузка со склада в течение 48 часов транспортными компаниями.' },
                { i: 'Scissors', t: 'Резка в размер', d: 'Порежем материал под ваши размеры под заказ.' },
              ].map((f) => (
                <div key={f.t} className="flex gap-4 rounded-sm border border-border bg-background p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
                    <Icon name={f.i} size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-600 uppercase">{f.t}</h3>
                    <p className="text-sm text-muted-foreground">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contacts / CTA */}
      <section id="contacts" className="container mx-auto py-20">
        <div className="metal-grain relative overflow-hidden rounded-sm border border-border p-10 text-center md:p-16">
          <div className="diag-stripes pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-700 uppercase md:text-5xl">Нужна шпоночная сталь?</h2>
            <p className="mt-4 text-muted-foreground">
              Оставьте заявку — рассчитаем стоимость и сроки поставки под ваш объём и размеры.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="font-display uppercase tracking-wider">
                <Icon name="Phone" size={18} className="mr-2" /> +7 (000) 000-00-00
              </Button>
              <Button size="lg" variant="outline" className="border-border font-display uppercase tracking-wider">
                <Icon name="Mail" size={18} className="mr-2" /> Написать на почту
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/40">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground md:flex-row">
          <span>© 2008–{new Date().getFullYear()} provoloka-lenta.ru · Шпоночная сталь и металлопрокат</span>
          <span className="uppercase tracking-wider">Производство · Склад · Доставка по РФ</span>
        </div>
      </footer>
    </div>
  );
};

const FilterChip = ({
  active,
  onClick,
  label,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  icon?: string;
}) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 rounded-sm border px-4 py-2 text-sm uppercase tracking-wider transition-all ${
      active
        ? 'border-primary bg-primary text-primary-foreground'
        : 'border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground'
    }`}
  >
    {icon && <Icon name={icon} size={16} />}
    {label}
  </button>
);

export default Index;
