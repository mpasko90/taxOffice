
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x: string) => x);

  const breadcrumbNames: { [key: string]: string } = {
    'uslugi': 'Usługi',
    'prowadzenie-ksiegowosci': 'Prowadzenie księgowości',
    'kadry-i-place': 'Kadry i płace',
    'konsultacje-ksiegowe': 'Konsultacje księgowe',
    'rozliczenia-roczne-pit': 'Rozliczenia roczne PIT',
    'o-nas': 'O nas',
    'faq': 'FAQ',
    'kontakt': 'Kontakt'
  };

  if (pathnames.length === 0) return null;

  return (
    <div className="bg-gray-50 py-4">
      <div className="container mx-auto px-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Strona główna</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {pathnames.map((pathname, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              const displayName = breadcrumbNames[pathname] || pathname;

              return (
                <div key={pathname} className="flex items-center">
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{displayName}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link href={routeTo}>{displayName}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </div>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Breadcrumbs;
