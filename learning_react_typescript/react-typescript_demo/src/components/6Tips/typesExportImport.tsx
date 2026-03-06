import type {ExportImportProps} from './importExport.types'

export const TypesExportImport = (props: ExportImportProps) => {
    return(
        <div>
            {props.name}
        </div>
    )
}

//we can import the types and use it.
//while using always use type keyword.