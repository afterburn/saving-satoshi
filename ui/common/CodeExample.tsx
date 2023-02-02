import { CopyButton } from 'ui'

export default function CodeExample({
  code,
  language,
  copy,
}: {
  code: string
  language: string
  copy?: boolean
}) {
  return (
    <pre className="mt-2 border-2 border-dashed border-white p-2 w-fit">
      <code
        className={`language-${language} flex items-center justify-between pl-2 pr-0`}
      >
        {code}&nbsp;
        {copy ? <CopyButton compact content={code} /> : null}
      </code>
    </pre>
  )
}
