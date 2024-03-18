import s from './recover-password.module.scss'
import {Card} from "@/components/ui/card";
import {Typography} from "@/components/ui/typography";
import {FormTextField} from "@/components/formComponents/formTextField";
import {Button} from "@/components/ui/button";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Link} from "react-router-dom";


const loginSchema = z.object({
    email: z.string().email(),
})

type FormValues = z.infer<typeof loginSchema>

type Props = {
    onSubmit: (data: FormValues) => void
}

export const RecoverPassword = ({onSubmit}: Props) => {
    const {
        control,
        formState: { errors },
        handleSubmit,
        register,
    } = useForm<FormValues>({
        defaultValues: {
            email: '',
        },
        resolver: zodResolver(loginSchema),
    })

    return (
            <Card className={s.card} >
                <Typography variant={"h1"} className={s.title}>
                    Forgot your password?
                </Typography>
                <form className={s.formRoot} onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.email}>
                        <FormTextField
                            {...register('email')}
                            control={control}
                            error={errors.email?.message}
                            label={'email'}
                            type={'email'}
                            placeholder={'Email'}
                        />
                    </div>
                    <Typography variant={'body2'} className={s.instr} >
                        Enter your email address and we will send you further instructions
                    </Typography>
                    <Button fullWidth className={s.btn} type={'submit'} style={{ marginLeft: '0', marginBottom: '31px' }}>
                        Send Instructions
                    </Button>
                </form>
                <Typography variant={'body2'} className={s.letter}>
                    Did you remember your password?
                </Typography>
                <Typography as={Link} to={'#'} className={s.loginLink} variant={'link1'}>
                    Try logging in
                </Typography>
            </Card>
    )
}
