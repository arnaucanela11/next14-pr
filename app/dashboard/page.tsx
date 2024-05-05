import { Suspense } from "react"
import LatestInvoices from "../ui/dashboard/latest-invoices"
import { LatestInvoicesSkeleton } from "../ui/skeletons"


function page() {
  return (
    <div>
      <Suspense fallback={<LatestInvoicesSkeleton />}>
      <LatestInvoices />
      </Suspense>
    </div>
  )
}

export default page