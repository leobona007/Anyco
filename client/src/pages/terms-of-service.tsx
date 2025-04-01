import { Card, CardContent } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-3xl">
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold mb-4">Termos de Serviço</h1>
          <p className="text-sm text-gray-600 mb-2">Data de Vigência: [Data]</p>
          <p className="mb-4">
            Bem-vindo ao Anyco! Estes Termos de Serviço regem o uso do nosso aplicativo. Ao utilizar nossos serviços, você concorda com estes termos:
          </p>
          <h2 className="text-xl font-semibold mb-2">1. Aceitação dos Termos:</h2>
          <p className="mb-4">
            Ao acessar ou usar o aplicativo, você concorda em cumprir estes Termos de Serviço.
          </p>
          <h2 className="text-xl font-semibold mb-2">2. Uso Permitido:</h2>
          <p className="mb-4">
            O aplicativo é destinado para uso pessoal e não comercial. Não o utilize para fins ilegais ou não autorizados.
          </p>
          <h2 className="text-xl font-semibold mb-2">3. Conteúdo:</h2>
          <p className="mb-4">
            Todo o conteúdo fornecido é de propriedade do Anyco ou de seus licenciadores. É proibida sua reprodução, modificação ou distribuição sem autorização prévia.
          </p>
          <h2 className="text-xl font-semibold mb-2">4. Limitação de Responsabilidade:</h2>
          <p className="mb-4">
            O Anyco não se responsabiliza por danos diretos ou indiretos decorrentes do uso ou da incapacidade de uso do aplicativo.
          </p>
          <h2 className="text-xl font-semibold mb-2">5. Alterações nos Termos:</h2>
          <p className="mb-4">
            Reservamo-nos o direito de alterar estes termos a qualquer momento. As alterações entram em vigor assim que publicadas.
          </p>
          <h2 className="text-xl font-semibold mb-2">6. Contato:</h2>
          <p>
            Para dúvidas ou solicitações, entre em contato pelo e-mail: suporte@anyco.com.br.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
