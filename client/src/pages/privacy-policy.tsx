import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-3xl">
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold mb-4">Política de Privacidade</h1>
          <p className="text-sm text-gray-600 mb-2">Data de Vigência: [Data]</p>
          <p className="mb-4">
            Este documento descreve como o Anyco coleta, usa, armazena e protege as informações fornecidas pelos usuários. Ao acessar e utilizar nosso aplicativo, você concorda com as práticas descritas abaixo.
          </p>
          <h2 className="text-xl font-semibold mb-2">Informações Coletadas:</h2>
          <p className="mb-4">
            Coletamos dados pessoais fornecidos voluntariamente (como nome, e-mail e informações necessárias para o uso do aplicativo), além de informações geradas automaticamente (dados de uso, logs, etc.).
          </p>
          <h2 className="text-xl font-semibold mb-2">Uso das Informações:</h2>
          <p className="mb-4">
            As informações coletadas são utilizadas para personalizar sua experiência, oferecer suporte técnico, melhorar nossos serviços e enviar notificações relacionadas.
          </p>
          <h2 className="text-xl font-semibold mb-2">Proteção dos Dados:</h2>
          <p className="mb-4">
            Utilizamos medidas de segurança técnicas e administrativas para proteger seus dados contra acesso não autorizado, alteração ou divulgação.
          </p>
          <h2 className="text-xl font-semibold mb-2">Compartilhamento de Dados:</h2>
          <p className="mb-4">
            Seus dados não serão compartilhados com terceiros, exceto quando exigido por lei ou para prestação de serviços essenciais.
          </p>
          <h2 className="text-xl font-semibold mb-2">Seus Direitos:</h2>
          <p className="mb-4">
            Você pode acessar, corrigir ou solicitar a exclusão de suas informações pessoais. Para isso, entre em contato pelo e-mail: suporte@anyco.com.br.
          </p>
          <h2 className="text-xl font-semibold mb-2">Contato:</h2>
          <p>
            Se tiver dúvidas sobre nossa Política de Privacidade, entre em contato pelo e-mail: suporte@anyco.com.br.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
