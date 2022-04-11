var WorkflowDesignerConstants = {
  ActivityColor: "#ECF0F1",
  ActivityTextColor: "#2D3436",
  ActivityInitialColor: "#27AE60",
  ActivityInitialTextColor: "#FFFFFF",
  ActivityFinalColor: "#2980B9",
  ActivityFinalTextColor: "#FFFFFF",
  ActivityShape: "#CECECE",
  SelectColor: "#F39C12",
  SelectTextColor: "#FFFFFF",
  SelectSubProcessColor: "#e3b015",
  SelectSubProcessTextColor: "#FFFFFF",
  ButtonActive: "#D4D8D9",
  DateTimeFormat: "YYYY-MM-DD HH:MM:SS",
  BarColor: "#EDF1F2",
  BarSeparatorColor: "#D9DEE0",
  IsRequiredColor: "#F56C6C",
  ParameterFromProcessColor: "#1f8dd6",
  DeleteConfirm: "Tem certeza de que deseja excluir o (s) item (ns) selecionado (s)?",
  DeleteConfirmCurrent: "Tem certeza de que deseja excluir este item?",
  FieldIsRequired: "Campo é obrigatório!",
  FieldIsNotCorrected: "Field is not corrected!",
  FieldMustBeUnique: "O campo deve ser único!",
  FieldMustContainAt: "Field must contain @",
  ButtonTextDelete: "Excluir",
  ButtonTextCreate: "Crio",
  ButtonTextSave: "Salve",
  ButtonTextYes: "Sim",
  ButtonTextNo: "Não",
  ButtonTextOk: "Ok",
  ButtonTextCancel: "Cancelar",
  ButtonTextClose: "Perto",
  ButtonTextUndo: "Desfazer",
  ButtonTextRedo: "Refazer",
  SaveConfirm: "Salvar alterações?",
  CloseWithoutSaving: "Fechar sem salvar?",
  TransitionAuto: "Auto",
  DialogConfirmText: "Questão",
  AlertTitle: "Warning",
  None: "Nenhum",
  Warning: "Aviso",
  SwitchToExpertMode: "Switch To Expert Mode",
  SwitchToDefaultMode: "Switch To Default Mode",
  InfoBlockLabel: {
    Activity: "Actividades:",
    Transition: "Transições:",
    Command: "Comandos:"
  },
  ActivityNamePrefix: "Atividade_",
  ActivityFormLabel: {
    Title: "Atividade",
    TitleForInline: "Activity Inline",
    Name: "Nome",
    State: "Estado",
    IsInitial: "Inicial",
    IsFinal: "Final",
    IsForSetState: "Para o estado definido",
    IsAutoSchemeUpdate: "Atualização do esquema automático",
    DisablePersist: "Disable persist",
    DisablePersists: {
      DisablePersistTransitionHistory: "Disable persist transition history",
      DisablePersistState: "Disable persist process state",
      DisablePersistParameters: "Disable persist process parameters"
    },
    Implementation: "Implementação",
    PreExecutionImplementation: "Implementação de pré-execução",
    ImpOrder: "Ordem",
    ExecutionTimeoutLabel: "Execution timeout",
    ExecutionTimeoutWarning: "Execution timeout works only with async actions. Check the cancellation token for proper timeout handling.",
    TimeoutsLabel: "Timeouts",
    TypeLabel: "Type",
    ActivityLabel: "Activity",
    StateLabel: "State",
    RetryCountLabel: "Retry count",
    SetActivityLabel: "SetActivity",
    SetStateLabel: "SetState",
    RetryLabel: "Retry",
    IgnoreLabel: "Ignore",
    AllExceptions: "*",
    IdleTimeoutLabel: "Idle timeout",
    ExceptionsHandling: "Exceptions handling",
    Exceptions: "Exceptions",
    ImpAction: "Açao",
    ImpActionParameter: "Parâmetro de ação",
    Annotations: "Annotations",
    AnnotationName: "Name",
    AnnotationValue: "Value",
    Scheme: "Inline scheme",
    UserComment: "Comente",
    AlwaysConditionShouldBeSingle: "Sempre condição deve ser único",
    OtherwiseConditionShouldBeSingle: "Caso contrário, a condição deve ser única"
  },
  Decision: {
    Title: "Decision",
    TitleForInline: "Decision Inline",
    To: "To activity",
    WhenTrue: "When True",
    WhenFalse: "When False",
    Transition: "Transitions to activities",
    Name: "Name",
    State: "State",
    IsInitial: "Initial",
    IsFinal: "Final",
    IsForSetState: "For set state",
    IsAutoSchemeUpdate: "Auto scheme update",
    Implementation: "Implementation",
    PreExecutionImplementation: "PreExecution Implementation",
    Annotations: "Annotations",
    Scheme: "Inline scheme",
    Condition: "Condition",
    ConditionType: "Type",
    ConditionAction: "Action",
    ResultOnPreExecution: "PreExec. Result",
    ConditionActionParameter: "Action parameter",
    ConditionInversion: "Invert result",
    ActionLabel: "Action",
    ExpressionLabel: "Expression",
    UserComment: "Comment"
  },
  DecisionTable: {
    Title: "Decision table",
    TitleForInline: "Decision table Inline",
    To: "To activity",
    Transition: "Transitions to activities",
    Parameters: "Parameters",
    Name: "Name",
    State: "State",
    IsInitial: "Initial",
    IsFinal: "Final",
    IsForSetState: "For set state",
    IsAutoSchemeUpdate: "Auto scheme update",
    Implementation: "Implementation",
    PreExecutionImplementation: "PreExecution Implementation",
    Annotations: "Annotations",
    Scheme: "Inline scheme",
    ConditionType: "Type",
    Condition: "Condition",
    ConditionAction: "Action",
    ResultOnPreExecution: "PreExec. Result",
    ConditionActionParameter: "Action parameter",
    ConditionInversion: "Invert result",
    ActionLabel: "Action",
    ExpressionLabel: "Expression",
    UserComment: "Comment"
  },
  TransitionFormLabel: {
    Title: "Transição",
    Name: "Nome",
    From: "Da atividade",
    To: "Para atividade",
    Classifier: "Classificador",
    ClassifierValues: ["NotSpecified", "Direct", "Reverse"],
    Restrictions: "Restrições",
    RestrictionsType: "Tipo",
    RestrictionsActor: "Ator",
    Condition: "Condição",
    ConditionType: "Tipo",
    ConditionAction: "Açao",
    ResultOnPreExecution: "Resultado na pré-execução",
    Trigger: "Desencadear",
    TriggerType: "Tipo",
    TriggerAuto: "Auto",
    TriggerCommand: "Comando",
    TriggerTimer: "Cronômetro",
    ConditionActionParameter: "Parâmetro de ação",
    ConditionExpression: "Expression",
    ConditionInversion: "Inverta o resultado da ação",
    ConditionsConcatenationType: "Tipo de concatenação de condições",
    AllowConcatenationType: "Concat permitir como",
    RestrictConcatenationType: "Concat restringir como",
    IsFork: "É garfo",
    MergeViaSetState: "Mesclar subprocesso via estado definido",
    DisableParentStateControl: "Desativar controle de processo pai",
    ShowConcatParameters: "Mostrar concatenação",
    HideConcatParameters: "Ocultar concatenação",
    Annotations: "Annotations",
    AnnotationName: "Name",
    AnnotationValue: "Value",
    InlinedFinalActivityName: "Inlined Final Activity Name",
    Allow: "Allow",
    Restrict: "Restrict",
    ConditionsListShouldNotBeEmpty: "A lista de condições não deve estar vazia",
    AlwaysConditionShouldBeSingle: "Always condition should be single",
    OtherwiseConditionShouldBeSingle: "Otherwise condition should be single",
    ConditionalLabel: "Conditional",
    AlwaysLabel: "Always",
    ActionLabel: "Action",
    ExpressionLabel: "Expression",
    OtherwiseLabel: "Otherwise",
    UserComment: "Comente",
    Subprocess: "Subprocess",
    SubprocessNone: "None",
    SubprocessStart: "Start",
    SubprocessFinalize: "Finalize",
    SubprocessAuto: "Auto",
    SubprocessStartSettings: "Subprocess start settings",
    SubprocessFinalizeSettings: "Subprocess finalize settings",
    SubprocessName: "Subprocess name",
    SubprocessId: "Subprocess id",
    SubprocessIdPlaceholder: "Autogenerated GUID",
    SubprocessNamePlaceholder: "Same as transition name",
    SubprocessStartupType: "Subprocess startup type",
    SubprocessStartupTypeSameThread: "Same thread",
    SubprocessStartupTypeAnotherThread: "Another thread",
    SubprocessStartupTypeTimerQueue: "Timer queue",
    SubprocessStartupParameterCopyStrategy: "Parameters copy strategy",
    SubprocessStartupParameterCopyStrategyCopyAll: "Copy all",
    SubprocessStartupParameterCopyStrategyIgnoreAll: "Ignore all",
    SubprocessStartupParameterCopyStrategyCopySpecified: "Copy specified",
    SubprocessStartupParameterCopyStrategyIgnoreSpecified: "Ignore specified",
    SubprocessSpecifiedParameters: "Specified parameters",
    SubprocessFinalizeParameterMergeStrategy: "Parameters merge strategy",
    SubprocessFinalizeParameterMergeStrategyOverwriteAllNulls: "Overwrite all nulls",
    SubprocessFinalizeParameterMergeStrategyOverwriteAll: "Overwrite all",
    SubprocessFinalizeParameterMergeStrategyOverwriteSpecified: "Overwrite specified",
    SubprocessFinalizeParameterMergeStrategyDontOverwriteSpecified: "Don't overwrite specified"
  },
  LocalizationFormLabel: {
    Title: "Localização",
    ObjectName: "ObjectName",
    Type: "Tipo",
    IsDefault: "IsDefault",
    Culture: "Cultura",
    Value: "Valor",
    Types: ["Command", "State", "Parameter"]
  },
  TimerFormLabel: {
    Title: "Temporizadores",
    Name: "Nome",
    Type: "Tipo",
    Value: "Valor",
    Types: ["Command", "State", "Parameter"],
    OverrideHint: "Anule o temporizador se existir",
    Override: "Anule"
  },
  AssignmentFormLabel: {
    Title: "Assignments",
    Code: "Code",
    Name: "Name",
    Executor: "Executor",
    ExecutorId: "Executor Id",
    Status: "Status",
    DateCreation: "Date creation",
    Description: "Description",
    DateStart: "Date start",
    DateFinish: "Date finish",
    DeadlineToStart: "Deadline to start",
    DeadlineToFinish: "Deadline to finish",
    Observers: "Observers",
    ObserverId: "Observer Id",
    Tags: "Tags",
    ProhibitedForExecution: "Prohibited for execution",
    AssignmentDeleted: "Assignment deleted",
    TypeSomething: "Type something"
  },
  ParameterFormLabel: {
    Title: "Parâmetros",
    Name: "Nome",
    Type: "Tipo",
    Purpose: "Propósito",
    Value: "Valor",
    InitialValue: "Valor inicial",
    ShowSystemParameters: "Mostrar parâmetros do sistema"
  },
  ActorFormLabel: {
    Title: "Atores",
    Name: "Nome",
    Rule: "Regra",
    Value: "Valor",
    ShowPredefinedActors: "Show predefined actors"
  },
  CommandFormLabel: {
    Title: "Comando",
    Name: "Nome",
    InputParameters: "Parâmetros de entrada",
    InputParametersName: "Nome",
    InputParametersIsRequired: "Requeridos",
    InputParametersParameter: "Parâmetro",
    InputParametersDefaultValue: "Padrão"
  },
  CommandParametersFormLabel: {
    Title: "command parameters",
    InputParametersName: "Name",
    InputParametersIsRequired: "Required",
    InputParametersParameter: "Parameter",
    InputParametersDefaultValue: "Default"
  },
  ProcessInfoFormLabel: {
    Title: "Additional Parameters",
    IsObsolete: "IsObsolete",
    DefiningParameters: "Defining parameters",
    ProcessParameters: "Process parameters",
    SystemParametersTabName: "System Parameters",
    ProcessParametersTabName: "Process Parameters",
    HistoryTabName: "History",
    TimersTabName: "Timers",
    TagsTabName: "Tags",
    TagsInputPlaceholder: "Start entering a name to add a tag",
    HistoryTabFromLabel: "From",
    HistoryTabFromStateLabel: "From State",
    HistoryTabToLabel: "To",
    HistoryTabToStateLabel: "To State",
    HistoryTabExecutorIdLabel: "Executor Id",
    HistoryTabActorIdLabel: "Actor Id",
    HistoryTabExecutorLabel: "Executor",
    HistoryTabActorLabel: "Actor",
    HistoryTabTimeLabel: "Time",
    HistoryTabStartTimeLabel: "Start Time",
    HistoryTabDurationLabel: "Duration (ms)",
    HistoryTabTriggerNameLabel: "Trigger Name",
    HistoryTabTransitionClassifierNameLabel: "",
    ParametersNameLabel: "Name",
    ParametersValueLabel: "Value",
    TimersTabNameLabel: "Name",
    TimersTabValueLabel: "Value",
    RootProcess: "Root Process",
    TagsLabel: "Tags (separated by commas)",
    GeneralTabLabel: "General",
    ProcessIdLabel: "Process Id"
  },
  DropdownValues: {
    Name: "Name",
    Value: "Value",
    Dropdown: "Dropdown",
    Values: "values"
  },
  CodeActionsFormLabel: {
    Title: "Ações de código",
    Name: "Nome",
    ActionCode: "Código de ação",
    CommonUsings: "Common Usings",
    IsGlobal: "É global",
    IsAsync: "Assíncrono",
    Type: "Tipo",
    GlobalDeleteMessage: "Se você excluir a Global CodeAction - <br/> <b> outros esquemas não poderão chamá-la!",
    UnGlobalMessage: "Você alterou o estado do sinalizador global. <br/> Será criada uma Ação de Código Local com base nesta Ação Global de Código após salvar este esquema.",
    EditParameters: "Edit parameters",
    Parameters: "Parameters",
    Text: "Text",
    TextArea: "TextArea",
    Number: "Number",
    Checkbox: "Checkbox",
    Dropdown: "Dropdown",
    MultiSelect: "MultiSelect",
    DateTime: "Date/Time",
    Date: "Date",
    Time: "Time",
    Values: "Values",
    DropdownName: "Name",
    DropdownValue: "Value",
    DropdownShouldContainValues: "Dropdown should contain values",
    IsRequired: "Required",
    DefaultValue: "Default value",
    Json: "Json",
    TitleField: "Title"
  },
  EditParametersFormlabel: {
    Title: "Edit parameter values",
    NumberRequired: "Should be a numeric value",
    DateShouldBeInISOFormat: "Date/Time parameter should be in ISO8601 format",
    SwitchToJson: "Switch to JSON editor",
    SwitchToConstructor: "Switch to parameter values editor",
    InvalidJson: "JSON object is invalid or does not match the model",
    CustomForms: {
      HTTPRequest: {
        Name: "Name",
        State: "State",
        UseAuth: "Use authentication",
        Heading: "Request",
        Url: "Url",
        Post: "Post",
        StoreResponse: "Store response",
        Username: "Username",
        Password: "Password",
        ParameterName: "Parameter name",
        ParameterPurpose: "Parameter purpose",
        ContentType: "Content type",
        AddProcessInstanceParameters: "Add process instance parameters",
        Parameters: "Parameters",
        Headers: "Headers"
      },
      SendEmail: {
        Name: "Name",
        State: "State",
        Heading: "Form",
        UseAuth: "Use authentication",
        MailServer: "Mail server",
        MailServerPort: "Mail server port",
        MailServerFrom: "Mail server from",
        To: "To",
        CcList: "CC address list",
        BccList: "BCC address list",
        ReplyToList: "Reply to address list",
        Subject: "Subject",
        MailServerSsl: "MailServerSsl",
        IsHTML: "IsHTML",
        MailServerLogin: "Mail server login",
        MailServerPass: "Mail server pass",
        Body: "Body"
      },
      StartLoopFor: {
        Name: "Name",
        State: "State",
        Heading: "Loop",
        DateRange: "Date range",
        RangeSeparator: "To",
        StartDate: "Start date",
        EndDate: "End date",
        Reverse: "Reverse",
        LoopName: "Loop name",
        LoopStateParameterName: "Loop state parameter name",
        LoopCounterValueParameterName: "Loop counter value parameter name",
        CounterType: "Counter type",
        StartValue: "Start value",
        EndValue: "End value",
        Step: "Step",
        StepType: "Step type",
        IncludeLastValue: "Include last value"
      },
      StartLoopForeach: {
        Name: "Name",
        State: "State",
        Heading: "Loop",
        ValuesError: "None value cannot be empty!",
        Values: "Values",
        LoopName: "Loop name",
        LoopStateParameterName: "Loop state parameter name",
        LoopCounterValueParameterName: "Loop counter value parameter name",
        Reverse: "Reverse"
      },
      CreateProcess: {
        Name: "Name",
        State: "State",
        Heading: "Main settings",
        ParameterName: "Name",
        ParameterPurpose: "Purpose",
        ParameterValue: "Value",
        Scheme: "Scheme",
        ProcessId: "Process id",
        ProcessCreationParameters: "Process creation parameters",
        ParameterInitialValue: "Initial value"
      },
      AssignmentCreate: {
        Name: "Name",
        State: "State",
        Heading: "Assignment",
        Code: "Code",
        NewTag: "New Tag",
        Executors: "Executors",
        IsActive: "Is active",
        Description: "Description",
        DeadlineToStart: "Deadline to start",
        DeadlineToComplete: "Deadline to complete",
        Observers: "Observers",
        Tags: "Tags"
      },
      AssignmentChange: {
        Name: "Name",
        State: "State",
        Heading: "Assignment",
        Code: "Code",
        ReplacementExecutors: "Replacement of executors",
        OldExecutor: "Old executor",
        NewExecutor: "New executor",
        AllExecutors: "All",
        Change: "Change",
        Status: "Status",
        DeadlineToStart: "Deadline to start",
        DeadlineToComplete: "Deadline to complete",
        Tags: "Tags",
        Observers: "Observers",
        NewTag: "New Tag",
        StatusState: "Status state",
        IsActive: "Is active"
      },
      AssignmentsHaveStatus: {
        Name: "Name",
        State: "State",
        Code: "Code",
        Condition: "Condition",
        IncludeInactive: "Include inactive",
        StatusState: "Status state",
        Assignments: "Assignments"
      },
      SetLoopState: {
        Name: "Name",
        State: "State",
        LoopName: "Loop name",
        LoopState: "Loop state"
      }
    },
    IncorrectForm: "Your form contains greater than one element, and at least one element doesn't have a Name. Please specify the Name for each element."
  },
  ToolbarLabel: {
    CreateActivity: "Criar atividade",
    CreateInline: "Create inline (template)",
    CopySelected: "Copiar selecionado",
    Undo: "Desfazer",
    Redo: "Refazer",
    Move: "Mover",
    ZoomIn: "Mais Zoom",
    ZoomOut: "Reduzir o zoom",
    FitToScreen: "Fit to screen",
    ZoomTo100: "Set zoom to 100%",
    FullScreen: "Tela cheia",
    Refresh: "Atualizar",
    AutoArrangement: "Auto arranjo",
    Actors: "Atores",
    Commands: "Comandos",
    Parameters: "Parâmetros",
    Assignments: "Assignments",
    Localization: "Localização",
    Timers: "Temporizadores",
    AdditionalParameters: "Parâmetros Adicionais",
    CodeActions: "Ações de código",
    Info: "Informação ampliada",
    Delete: "Excluir",
    Clone: "Clone",
    Settings: "Definições",
    CreateTransition: "Crie uma transição",
    CreateActivityTransition: "Crie uma atividade e uma transição",
    Legend: "lenda",
    ProcessInfo: "Process Info",
    Inline: "The scheme can be inlined",
    Elements: "Elements",
    Library: "Library",
    ResetSettings: "Reset settings",
    ZoomPositionDefault: "Padrão de zoom"
  },
  LibraryLabel: {PluginRequired: "Plugin required:"},
  Logs: {
    Label: "Logs",
    ParamName: "LogEnabled",
    Description: "This parameter is the default value for logging processes based on this scheme",
    Refresh: "Refresh",
    AutoRefresh: "Auto refresh",
    Empty: "Empty",
    Timestamp: "Timestamp",
    Message: "Message",
    Exception: "Exception",
    Show: "Show",
    ExceptionInfo: "Exception info",
    HideDetails: "Hide details",
    ShowDetails: "Show details"
  },
  ErrorActivityIsInitialCountText: "Um elemento deve ser marcado como inicial",
  ErrorActivityIsFinalCountText: "This scheme is Inlined. One or more elements must be marked flag Final",
  ErrorReadOnlySaveText: "O Designer no modo ReadOnly, você não pode salvá-lo.",
  ErrorInvalidObjectsSaveText: "Can't save the schema. Those objects are in invalid state",
  BrokenReferencesDialogText: "This schema contains references to ELEMENTS that aren't defined by this schema or current action providers. Do you want to keep them?",
  EditCodeSettings: {
    Height: 600,
    Width: 1000,
    CodeHeight: 390,
    MessageBoxHeight: 400,
    MessageBoxWidth: 600,
    SuccessBoxHeight: 150,
    SuccessBoxWidth: 300
  },
  EditCodeLabel: {
    Title: "Editar código",
    EditCodeButton: "Editar código",
    Usings: "Usos",
    Compile: "Compilar",
    CompileSucceeded: "Compilação bem sucedida.",
    Success: "Sucesso",
    Error: "Erro",
    OK: "Está bem",
    ShowUsings: "Mostrar utilizações",
    HideUsings: "Esconder usings"
  },
  EditJSONLabel: {
    Title: "Editar valor em JSON",
    CreateEmptyType: "Crio",
    Format: "Formato"
  },
  EditExpressionSettings: {
    Height: 600,
    Width: 1000,
    CodeHeight: 390,
    MessageBoxHeight: 400,
    MessageBoxWidth: 600,
    SuccessBoxHeight: 150,
    SuccessBoxWidth: 300
  },
  EditExpressionLabel: {
    Title: "Edit expression",
    Validate: "Validate",
    Succeeded: "Expression is valid.",
    Success: "Success",
    Error: "Error",
    OK: "OK"
  },
  Elements: {
    Header: "Elements",
    BasicActivity: "Basic Activity",
    BasicActivityDesc: "It determines a state and the order, in which Actions are executed in your process.",
    InlineHeader: "Inline",
    InitialActivity: "Initial Activity",
    InitialActivityDesc: "It a initial state.",
    FinalActivity: "Final Activity",
    FinalActivityDesc: "It a final state.",
    SetLoopState: {
      Title: "Set loop state",
      Description: "The action for set loop state"
    }
  },
  OverviewMap: {show: true, width: 300, height: 150},
  UndoDepth: 200,
  DefaultCulture: "pt-BR",
  ErrorInBrowserConsole: "See more info in the browser console.",
  ELEMENT: {
    el: {
      colorpicker: {confirm: "Confirmar", clear: "Limpar"},
      datepicker: {
        now: "Agora",
        today: "Hoje",
        cancel: "Cancelar",
        clear: "Limpar",
        confirm: "Confirmar",
        selectDate: "Selecione a data",
        selectTime: "Selecione a hora",
        startDate: "Data de inicio",
        startTime: "Hora de inicio",
        endDate: "Data de fim",
        endTime: "Hora de fim",
        prevYear: "Previous Year",
        nextYear: "Next Year",
        prevMonth: "Previous Month",
        nextMonth: "Next Month",
        year: "",
        month1: "Janeiro",
        month2: "Fevereiro",
        month3: "Março",
        month4: "Abril",
        month5: "Maio",
        month6: "Junho",
        month7: "Julho",
        month8: "Agosto",
        month9: "Setembro",
        month10: "Outubro",
        month11: "Novembro",
        month12: "Dezembro",
        week: "week",
        weeks: {
          sun: "Dom",
          mon: "Seg",
          tue: "Ter",
          wed: "Qua",
          thu: "Qui",
          fri: "Sex",
          sat: "Sab"
        },
        months: {
          jan: "Jan",
          feb: "Fev",
          mar: "Mar",
          apr: "Abr",
          may: "Mai",
          jun: "Jun",
          jul: "Jul",
          aug: "Ago",
          sep: "Set",
          oct: "Out",
          nov: "Nov",
          dec: "Dez"
        }
      },
      select: {
        loading: "A carregar",
        noMatch: "Sem correspondência",
        noData: "Sem dados",
        placeholder: "Selecione"
      },
      cascader: {
        noMatch: "Sem correspondência",
        loading: "A carregar",
        placeholder: "Selecione",
        noData: "Sem dados"
      },
      pagination: {
        goto: "Ir para",
        pagesize: "/pagina",
        total: "Total {total}",
        pageClassifier: ""
      },
      messagebox: {
        title: "Mensagem",
        confirm: "Confirmar",
        cancel: "Cancelar",
        error: "Erro!"
      },
      upload: {
        deleteTip: "press delete to remove",
        delete: "Apagar",
        preview: "Previsualizar",
        continue: "Continuar"
      },
      table: {
        emptyText: "Sem dados",
        confirmFilter: "Confirmar",
        resetFilter: "Limpar",
        clearFilter: "Todos",
        sumText: "Sum"
      },
      tree: {emptyText: "Sem dados"},
      transfer: {
        noMatch: "Sem correspondência",
        noData: "Sem dados",
        titles: ["List 1", "List 2"],
        filterPlaceholder: "Enter keyword",
        noCheckedFormat: "{total} items",
        hasCheckedFormat: "{checked}/{total} checked"
      },
      image: {error: "FAILED"},
      pageHeader: {title: "Back"},
      popconfirm: {confirmButtonText: "Yes", cancelButtonText: "No"},
      empty: {description: "Sem dados"}
    }
  },
  EditJSONSettings: {Height: 600, Width: 1000, CodeHeight: 480}
};

window.WorkflowDesignerConstants = WorkflowDesignerConstants;