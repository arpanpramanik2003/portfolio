import data from '../../data/sections/certificates.json';
import { CertificatesClient } from './CertificatesClient';

export const Certificates = () => {
  return <CertificatesClient heading={data.heading} certificates={data.certificates} />;
};

export default Certificates;
