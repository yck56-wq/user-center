((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['p__user__Register__index'],
{ "src/pages/user/Register/index.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _components = __mako_require__("src/components/index.ts");
var _api = __mako_require__("src/services/ant-design-pro/api.ts");
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _max = __mako_require__("src/.umi/exports.ts");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _antdstyle = __mako_require__("node_modules/antd-style/es/index.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _defaultSettings = /*#__PURE__*/ _interop_require_default._(__mako_require__("config/defaultSettings.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
var _s1 = $RefreshSig$();
const useStyles = (0, _antdstyle.createStyles)(({ token })=>{
    return {
        action: {
            marginLeft: '8px',
            color: 'rgba(0, 0, 0, 0.2)',
            fontSize: '24px',
            verticalAlign: 'middle',
            cursor: 'pointer',
            transition: 'color 0.3s',
            '&:hover': {
                color: token.colorPrimaryActive
            }
        },
        lang: {
            width: 42,
            height: 42,
            lineHeight: '42px',
            position: 'fixed',
            right: 16,
            borderRadius: token.borderRadius,
            ':hover': {
                backgroundColor: token.colorBgTextHover
            }
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflow: 'auto',
            backgroundImage: "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
            backgroundSize: '100% 100%'
        }
    };
});
const ActionIcons = ()=>{
    _s();
    const { styles } = useStyles();
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.AlipayCircleOutlined, {
                className: styles.action
            }, "AlipayCircleOutlined", false, {
                fileName: "src/pages/user/Register/index.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.TaobaoCircleOutlined, {
                className: styles.action
            }, "TaobaoCircleOutlined", false, {
                fileName: "src/pages/user/Register/index.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.WeiboCircleOutlined, {
                className: styles.action
            }, "WeiboCircleOutlined", false, {
                fileName: "src/pages/user/Register/index.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(ActionIcons, "1BGFRu6BGAbhzJ8kKgs1GUjvI6w=", false, function() {
    return [
        useStyles
    ];
});
_c = ActionIcons;
const Register = ()=>{
    _s1();
    const [type, setType] = (0, _react.useState)('account');
    const { styles } = useStyles();
    const { message } = _antd.App.useApp();
    //表单提交
    const handleSubmit = async (values)=>{
        const { userAccount, userPassword, checkPassword, personalCode } = values;
        //校验
        if (userPassword !== checkPassword) {
            message.error('两次输入的密码不一致');
            return;
        }
        // 注册
        const res = await (0, _api.register)({
            userAccount,
            userPassword,
            checkPassword,
            personalCode
        });
        // @ts-ignore
        if (res > 0) {
            const defaultLoginSuccessMessage = '注册成功！';
            message.success(defaultLoginSuccessMessage);
            new URL(window.location.href).searchParams;
            setTimeout(()=>{
                window.location.href = '/user/login';
            }, 500);
            return;
        }
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: styles.container,
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.Helmet, {
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("title", {
                    children: [
                        '注册',
                        _defaultSettings.default.title && ` - ${_defaultSettings.default.title}`
                    ]
                }, void 0, true, {
                    fileName: "src/pages/user/Register/index.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/pages/user/Register/index.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                style: {
                    flex: '1',
                    padding: '32px 0'
                },
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.LoginForm, {
                    submitter: {
                        searchConfig: {
                            submitText: '注册'
                        }
                    },
                    contentStyle: {
                        minWidth: 280,
                        maxWidth: '75vw'
                    },
                    logo: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                        alt: "logo",
                        src: "/logo.svg"
                    }, void 0, false, {
                        fileName: "src/pages/user/Register/index.tsx",
                        lineNumber: 120,
                        columnNumber: 17
                    }, void 0),
                    title: "User Center",
                    subTitle: '',
                    initialValues: {
                        autoLogin: true
                    },
                    onFinish: async (values)=>{
                        await handleSubmit(values);
                    },
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tabs, {
                            activeKey: type,
                            onChange: setType,
                            centered: true,
                            items: [
                                {
                                    key: 'account',
                                    label: '账户密码注册'
                                }
                            ]
                        }, void 0, false, {
                            fileName: "src/pages/user/Register/index.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        type === 'account' && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                    name: "userAccount",
                                    fieldProps: {
                                        size: 'large',
                                        prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.UserOutlined, {}, void 0, false, {
                                            fileName: "src/pages/user/Register/index.tsx",
                                            lineNumber: 148,
                                            columnNumber: 27
                                        }, void 0)
                                    },
                                    placeholder: '请输入账户',
                                    rules: [
                                        {
                                            required: true,
                                            message: '账户是必填项！'
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "src/pages/user/Register/index.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText.Password, {
                                    name: "userPassword",
                                    fieldProps: {
                                        size: 'large',
                                        prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.LockOutlined, {}, void 0, false, {
                                            fileName: "src/pages/user/Register/index.tsx",
                                            lineNumber: 162,
                                            columnNumber: 27
                                        }, void 0)
                                    },
                                    placeholder: '请输入密码',
                                    rules: [
                                        {
                                            required: true,
                                            message: '密码是必填项！'
                                        },
                                        {
                                            min: 8,
                                            type: 'string',
                                            message: '长度不能小于 8'
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "src/pages/user/Register/index.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText.Password, {
                                    name: "checkPassword",
                                    fieldProps: {
                                        size: 'large',
                                        prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.LockOutlined, {}, void 0, false, {
                                            fileName: "src/pages/user/Register/index.tsx",
                                            lineNumber: 181,
                                            columnNumber: 27
                                        }, void 0)
                                    },
                                    placeholder: '请再次输入密码',
                                    rules: [
                                        {
                                            required: true,
                                            message: '确认密码是必填项！'
                                        },
                                        {
                                            min: 8,
                                            type: 'string',
                                            message: '长度不能小于 8'
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "src/pages/user/Register/index.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                    name: "personalCode",
                                    fieldProps: {
                                        size: 'large',
                                        prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.UserOutlined, {}, void 0, false, {
                                            fileName: "src/pages/user/Register/index.tsx",
                                            lineNumber: 200,
                                            columnNumber: 27
                                        }, void 0)
                                    },
                                    placeholder: '请输入个人编号',
                                    rules: [
                                        {
                                            required: true,
                                            message: '个人编号是必填项！'
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "src/pages/user/Register/index.tsx",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/user/Register/index.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/pages/user/Register/index.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_components.Footer, {}, void 0, false, {
                fileName: "src/pages/user/Register/index.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/user/Register/index.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
};
_s1(Register, "IR3+vbQs5wYKRIoB+Q5CJuwDCVc=", false, function() {
    return [
        useStyles,
        _antd.App.useApp
    ];
});
_c1 = Register;
var _default = Register;
var _c;
var _c1;
$RefreshReg$(_c, "ActionIcons");
$RefreshReg$(_c1, "Register");
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
//# sourceMappingURL=p__user__Register__index-async.js.map