<?php
header('Content-Type: application/json');

// Obter a solicitação assinada via POST
$signed_request = $_POST['signed_request'] ?? '';
$data = parse_signed_request($signed_request);

if(!$data || !isset($data['user_id'])) {
    echo json_encode(['error' => 'Invalid signed_request']);
    exit;
}

$user_id = $data['user_id'];

// Iniciar a exclusão dos dados do usuário (implemente aqui a lógica de exclusão)
// ...existing data deletion process...

// Gerar URL de status e código de confirmação (valores de exemplo)
$status_url = 'https://www./anyco.com.br/deletion?id=abc123';
$confirmation_code = 'abc123';

$response = array(
    'url' => $status_url,
    'confirmation_code' => $confirmation_code
);

echo json_encode($response);

/* Função para processar o signed_request */
function parse_signed_request($signed_request) {
    list($encoded_sig, $payload) = explode('.', $signed_request, 2);
    $secret = "appsecret"; // Substitua pelo seu secret

    // Decodificar as partes
    $sig = base64_url_decode($encoded_sig);
    $data = json_decode(base64_url_decode($payload), true);

    // Verificar assinatura
    $expected_sig = hash_hmac('sha256', $payload, $secret, true);
    if($sig !== $expected_sig) {
        error_log('Bad Signed JSON signature!');
        return null;
    }
    return $data;
}

function base64_url_decode($input) {
    return base64_decode(strtr($input, '-_', '+/'));
}
?>
