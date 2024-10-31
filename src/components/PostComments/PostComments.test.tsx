import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

const testarAdcComentario = (executarDebug: Function, comentario: string) => {
    // escreve texto no 'textArea'
    fireEvent.change(screen.getByTestId('id-texto'), {
        target: {
            value: comentario
        }
    })
    // aciona botao insercao
    fireEvent.click(screen.getByTestId('id-btncomentar'));
    // efetua debug do test
    executarDebug();
    // oque se espera: expectativa
    expect(screen.getByText(comentario)).toBeInTheDocument()
}

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => { 
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
});

    // cria uma 'suite' p/ os testes de adicao de comentarios
describe('Teste p/ adicionar dois comentarios', () => {
    // teste 1
    test('Teste adicionando comentario 1', () => {
        // renderiza componente
        const { debug }= render(<PostComment/>);
        // testa comentario
        testarAdcComentario(debug, 'ola');
    });
    // teste 2
    test('Teste adicionando comentario 2', () => {
        // renderiza componente
        const { debug }= render(<PostComment/>);
        // testa comentario
        testarAdcComentario(debug, 'fulano');
    });
    // teste 3
    test('Teste adicionando 2 comentarios', () => {
        // renderiza componente
        const { debug }= render(<PostComment/>);
        // testa comentario
        testarAdcComentario(debug, 'agora');
        testarAdcComentario(debug, 'eh dois');
        // expectativa
        expect(screen.getAllByTestId('id-itens')).toHaveLength(2)
    });
});