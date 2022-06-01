import * as React from "react"
import Card from 'react-bootstrap/Card'
import * as web3 from '@solana/web3.js'
//import * as splNameService from '@solana/spl-name-service'
import * as bonFidaNameService from '@bonfida/spl-name-service';
//import { Button } from "react-bootstrap"

interface ProgramAccount {
    pubkey: web3.PublicKey;
    account: web3.AccountInfo<Buffer | web3.ParsedAccountData>;
}

function NameServiceAccountView(props: { account: ProgramAccount }) {
    const { account } = props;
    const [name, setName] = React.useState<string>('');
    const [domainTLD, setDomainTLD] = React.useState<string>('');
    const solTLD = new web3.PublicKey('58PwtjSDuFHuUkYjH9BYnnQKHfwo9reZhC2zMJv9JPkx');
    // https://github.com/solana-labs/solana-program-library/blob/master/name-service/js/src/state.ts

    // const connection = new web3.Connection(web3.clusterApiUrl('mainnet-beta'),'confirmed')
    // splNameService.performReverseLookup(connection, domainKey).then((res) => {

    // })
    React.useEffect(() => {
        const connection = new web3.Connection(web3.clusterApiUrl('mainnet-beta'), 'confirmed')

        // TODO: need to abstract these to cache the answers _and_ batch them.

        bonFidaNameService.performReverseLookup(connection, account.pubkey).then((nameResult) => {
            setName(nameResult)
            console.log("account: ", JSON.stringify(account))
        }).catch((e) => {
            setName('unknown')
            console.log(e)
        })

        bonFidaNameService.NameRegistryState.retrieve(connection, account.pubkey).then((nrs) => {
            console.log("NameRegistyState of (domain): ", JSON.stringify(nrs));
            if (nrs.registry.parentName) {
                const parent = nrs.registry.parentName.toString();
                const sol = solTLD.toString();
                console.log("comparing " + parent + " to " + sol)
                if (parent === sol) {
                    setDomainTLD('sol')
                }
                // parentName ==58PwtjSDuFHuUkYjH9BYnnQKHfwo9reZhC2zMJv9JPkx == .sol (but that account has no data!)
                bonFidaNameService.performReverseLookup(connection, nrs.registry.parentName).then((nameResult) => {
                    console.log("nrs name: ", JSON.stringify(nameResult))
                    setDomainTLD(nameResult)
                }).catch((e) => {
                    console.log("nrs reverse lookup", e)
                })
            }
        })


    }, [account])


    return (
        <Card>
            <Card.Body>
                <Card.Title>{account.pubkey.toString()}</Card.Title>
                <Card.Text>
                    <div>NAME: {name}.{domainTLD}</div>
                    <div>{account.account.lamports / web3.LAMPORTS_PER_SOL} SOL</div>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">EXECUTABLE: {account.account.executable}</small>
            </Card.Footer>
        </Card>
    )
}

export default NameServiceAccountView