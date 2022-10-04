
import { TabView, TabPanel } from 'primereact/tabview';
import TapInfo from './information/TapInfo';
import TapService from './service/TapService';
import TapBilling from './billing/TapBilling';

const ReadCustomerTap = (props) => {
    return (
        <>
           
            <TabView scrollable>
                <TabPanel header="Información">
                    <TapInfo />
                </TabPanel>
                <TabPanel header="Servicios">
                    <TapService />
                </TabPanel>
                <TabPanel header="Facturación">
                    <TapBilling />
                </TabPanel>
                <TabPanel header="Estadística">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </TabPanel>
                <TabPanel header="Documentos">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </TabPanel>
                <TabPanel header="Conducir">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </TabPanel>
                <TabPanel header="Comunicación">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </TabPanel>
                <TabPanel>
                </TabPanel>
            </TabView>
        </>
    )
}


export default ReadCustomerTap