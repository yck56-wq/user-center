import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
import {Outlet} from "@umijs/max";
const Admin: React.FC = () => {
  return (
    <PageContainer >
      <Outlet />
    </PageContainer>
  );
};
export default Admin;
