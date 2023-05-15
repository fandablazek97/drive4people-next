import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

import { useTranslation } from "@/hooks/useTranslation";

export default function Gdpr() {
  const t = useTranslation();
  return (
    <Layout>
      <Seo title={t.index.seo.title} description={t.index.seo.description} />

      <div>gdpr</div>
    </Layout>
  );
}
