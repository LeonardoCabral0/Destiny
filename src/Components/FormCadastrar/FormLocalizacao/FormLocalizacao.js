import './FormLocalizacao.css'

export default function FormLocalizacao({ handleAddPost, valueCidade, valueReferencia, cidadeRef }) {
    return (
        <div className="sec-localizacao">
            <div className="localizacao">
                <label htmlFor="cidade">Localização:</label>
                <select onChange={handleAddPost} onClick={handleAddPost} name="uf">
                    <option value="AC">AC</option>
                    <option value="AL">AL</option>
                    <option value="AP">AP</option>
                    <option value="AM">AM</option>
                    <option value="BA">BA</option>
                    <option value="CE">CE</option>
                    <option value="ES">ES</option>
                    <option value="GO">GO</option>
                    <option value="MA">MA</option>
                    <option value="MT">MT</option>
                    <option value="MS">MS</option>
                    <option value="MG">MG</option>
                    <option value="PA">PA</option>
                    <option value="PB">PB</option>
                    <option value="PR">PR</option>
                    <option value="PE">PE</option>
                    <option value="PI">PI</option>
                    <option value="RJ">RJ</option>
                    <option value="RN">RN</option>
                    <option value="RS">RS</option>
                    <option value="RO">RO</option>
                    <option value="RR">RR</option>
                    <option value="SC">SC</option>
                    <option value="SP">SP</option>
                    <option value="SE">SE</option>
                    <option value="TO">TO</option>
                    <option value="DF">DF</option>
                </select>
                <input ref={cidadeRef} onChange={handleAddPost} value={valueCidade} type="text" name="cidade" id="cidade" placeholder="Cidade" />
                {(valueCidade.length>30) ? <p className="error">Nome de cidade muito grande!</p> : ''}
            </div>
            <div className="referencia">
                <label htmlFor="referencia">Referência:</label>
                <input onChange={handleAddPost} value={valueReferencia} type="text" name="referencia" id="referencia" placeholder="Digite uma referência caso exista" />
                {(valueReferencia.length>50) ? <p className="error">Nome de referência muito grande!</p> : ''}
            </div>
        </div>
    )
}