((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['p__admin__UserManage__index'],
{ "src/pages/admin/UserManage/index.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    default: function() {
        return Component$$;
    },
    waitTime: function() {
        return waitTime;
    },
    waitTimePromise: function() {
        return waitTimePromise;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _react = __mako_require__("node_modules/react/index.js");
var _api = __mako_require__("src/services/ant-design-pro/api.ts");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const waitTimePromise = async (time = 100)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(true);
        }, time);
    });
};
const waitTime = async (time = 100)=>{
    await waitTimePromise(time);
};
const columns = [
    {
        dataIndex: 'id',
        valueType: 'indexBorder',
        width: 48
    },
    {
        title: '用户名',
        dataIndex: 'username',
        copyable: true
    },
    {
        title: '用户账户',
        dataIndex: 'userAccount',
        copyable: true
    },
    {
        title: '头像',
        render: (_, record)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Image, {
                    src: record.avatarUrl,
                    width: 100
                }, void 0, false, {
                    fileName: "src/pages/admin/UserManage/index.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/pages/admin/UserManage/index.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
        dataIndex: 'avatarUrl'
    },
    {
        title: '性别',
        dataIndex: 'gender'
    },
    {
        title: '电话',
        dataIndex: 'phone',
        copyable: true
    },
    {
        title: '邮件',
        dataIndex: 'email',
        copyable: true
    },
    {
        title: '状态',
        dataIndex: 'userStatus'
    },
    {
        title: '个人编号',
        dataIndex: 'personalCode'
    },
    {
        title: '角色',
        dataIndex: 'userRole',
        valueType: 'select',
        valueEnum: {
            0: {
                text: '普通用户',
                status: 'Default'
            },
            1: {
                text: '管理员',
                status: 'Success'
            }
        }
    },
    {
        title: '创建时间',
        valueType: 'date',
        dataIndex: 'createTime'
    },
    {
        title: '操作',
        valueType: 'option',
        key: 'option',
        render: (text, record, _, action)=>[
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                    onClick: ()=>{
                        var _action_startEditable;
                        action === null || action === void 0 || (_action_startEditable = action.startEditable) === null || _action_startEditable === void 0 || _action_startEditable.call(action, record.id);
                    },
                    children: "编辑"
                }, "editable", false, {
                    fileName: "src/pages/admin/UserManage/index.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                    href: record.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "查看"
                }, "view", false, {
                    fileName: "src/pages/admin/UserManage/index.tsx",
                    lineNumber: 95,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.TableDropdown, {
                    onSelect: ()=>action === null || action === void 0 ? void 0 : action.reload(),
                    menus: [
                        {
                            key: 'copy',
                            name: '复制'
                        },
                        {
                            key: 'delete',
                            name: '删除'
                        }
                    ]
                }, "actionGroup", false, {
                    fileName: "src/pages/admin/UserManage/index.tsx",
                    lineNumber: 98,
                    columnNumber: 7
                }, this)
            ]
    }
];
function Component$$() {
    _s();
    // @ts-ignore
    const actionRef = (0, _react.useRef)();
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProTable, {
        columns: columns,
        actionRef: actionRef,
        cardBordered: true,
        request: async (params, sort, filter)=>{
            console.log(sort, filter);
            // await waitTime(2000);
            const userList = await (0, _api.searchUsers)();
            return {
                data: userList
            };
        },
        editable: {
            type: 'multiple'
        },
        columnsState: {
            persistenceKey: 'pro-table-singe-demos',
            persistenceType: 'localStorage',
            defaultValue: {
                option: {
                    fixed: 'right',
                    disable: true
                }
            },
            onChange (value) {
                console.log('value: ', value);
            }
        },
        rowKey: "id",
        search: {
            labelWidth: 'auto'
        },
        options: {
            setting: {
                listsHeight: 400
            }
        },
        form: {
            // 由于配置了 transform，提交的参数与定义的不同这里需要转化一下
            syncToUrl: (values, type)=>{
                if (type === 'get') return {
                    ...values,
                    created_at: [
                        values.startTime,
                        values.endTime
                    ]
                };
                return values;
            }
        },
        pagination: {
            pageSize: 5,
            onChange: (page)=>console.log(page)
        },
        dateFormatter: "string",
        headerTitle: "高级表格",
        toolBarRender: ()=>[]
    }, void 0, false, {
        fileName: "src/pages/admin/UserManage/index.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_s(Component$$, "2rlDiMquUrIrAm+NnijIrAKu9dQ=");
_c = Component$$;
var _c;
$RefreshReg$(_c, "Component$$");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
 }]);
//# sourceMappingURL=p__admin__UserManage__index-async.js.map