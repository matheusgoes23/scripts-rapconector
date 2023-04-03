import axios, { AxiosError, AxiosResponse } from 'axios';

interface Document {
  documentId: number,
  documentType: number,
  securityCode: string,
  yourNumber: string,
  groupId: string,
  authorization: string,
  currentState: number,
}

// Função que executa o DELETE com o ID de cada objeto
async function deleteDocument(documentId: number): Promise<void> {
  try {
    const response: AxiosResponse = await axios.delete(`${process.env.API_URL}/documents/${documentId}`);
    console.log(`Documento com ID ${documentId} deletado com sucesso!`);
  } catch (error: unknown) {
    console.error(`Erro ao deletar documento com ID ${documentId}:`, (error as AxiosError)?.response?.data);
  }
}

// Função principal que faz a requisição GET e chama a função de DELETE para cada objeto
export async function deleteAllDocumentsByState(state: number): Promise<void> {
  try {
    const response: AxiosResponse = await axios.get(`${process.env.API_URL}/documents?state=${state}`);

    const documents: Document[] = response.data;

    for (const document of documents) {
      await deleteDocument(document.documentId);
    }
  } catch (error: unknown) {
    console.error('Erro ao fazer requisição GET:', (error as AxiosError)?.response?.data);
  }
}
