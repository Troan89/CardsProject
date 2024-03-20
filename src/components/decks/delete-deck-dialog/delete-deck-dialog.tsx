import s from './delete-deck-dialog.module.scss'
import {Modal} from "@/components/ui/modal";
export default {}
type Props = {
  deckName?: string
    isOpen: boolean
}
export const DeleteDeckDialog = ({ deckName, isOpen }: Props) => {
  return (
    <Modal title={'Delete deck'} isOpen={isOpen}>
      <div className={s.content}>
        <p>
          Do you really want to remove <strong>{deckName}</strong>?
        </p>
        <p>All cards will be deleted.</p>
      </div>
    </Modal>
  )
}
